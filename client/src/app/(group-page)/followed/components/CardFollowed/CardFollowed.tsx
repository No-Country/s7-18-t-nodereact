'use client';

import { PointsMenu } from '@/app/(group-page)/components';
import { AvatarIcon, EyeSlashIcon, StarIcon, TrashIcon, NotificationIcon, RemoveUserIcon, AddUserIcon } from '@/icons';
import {
  IProfile,
  addFavoriteUsers,
  addFollowing,
  removeFavoriteUsers,
  removeFollowing,
} from '@/redux/slices/sliceUser';
import { useEffect, useState } from 'react';
import axiosApi from '@/app/libs/axios';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Toaster, toast } from 'sonner';
import Image from 'next/image';

interface Props {
  id: string;
}

const CardFollowed = ({ id }: Props) => {
  const [profile, setProfile] = useState<IProfile>();
  const { _id, following, favoriteUsers } = useAppSelector((state) => state.userReducer.user);
  const token = useAppSelector((state) => state.userReducer.token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    axiosApi
      .get(`/users/profile/${id}`)
      .then(({ data }) => setProfile(data))
      .catch((err) => console.log(err));
  }, [id]);

  const optionsMenu = [
    {
      label: favoriteUsers?.includes(id) ? 'Quitar de favoritos' : 'Añadir a favoritos',
      icon: <StarIcon />,
      action: async () => {
        if (id === _id) return toast.error('No se puede agregar a favoritos a uno mismo');
        if (favoriteUsers?.includes(id)) {
          try {
            await axiosApi.delete(`/users/favorite-users`, {
              headers: { authorization: `Bearer ${token}` },
              data: {
                userId: _id,
                userToRemoveId: id,
              },
            });
            dispatch(removeFavoriteUsers(id));
            toast.success('Favoritos actualizado');
          } catch (error) {
            toast.error('Hubo un error al actualizar favoritos');
          }
        } else {
          try {
            axiosApi.post(
              '/users/favorite-users',
              {
                userId: _id,
                userToAddId: id,
              },
              {
                headers: { authorization: `Bearer ${token}` },
              }
            ),
              dispatch(addFavoriteUsers(id));
            toast.success('Favoritos actualizado');
          } catch (error) {
            toast.error('Hubo un error al actualizar favoritos');
          }
        }
      },
    },
    {
      label: following?.includes(id) ? 'Dejar de seguir' : 'Seguir',
      icon: following?.includes(id) ? <RemoveUserIcon /> : <AddUserIcon />,
      action: async () => {
        if (id === _id) return toast.error('No se puede seguirse a uno mismo');
        if (following?.includes(id)) {
          try {
            await axiosApi.delete(`/users/unfollow/${_id}`, {
              headers: { authorization: `Bearer ${token}` },
              data: {
                userToUnfollowId: id,
              },
            });
            dispatch(removeFollowing(id));
            toast.success('Seguidores actualizado');
          } catch (error) {
            toast.error('Hubo un error al actualizar Seguidores');
          }
        } else {
          try {
            await axiosApi.post(
              '/users/follow',
              {
                userId: _id,
                userToFollowId: id,
              },
              {
                headers: { authorization: `Bearer ${token}` },
              }
            ),
              dispatch(addFollowing(id));
            toast.success('Seguidores actualizado');
          } catch (error) {
            toast.error('Hubo un error al actualizar Seguidores');
          }
        }
      },
    },
    {
      label: 'Ocultar',
      icon: <EyeSlashIcon />,
      action: () => {},
    },
  ];

  return (
    <>
      <div className='flex flex-col gap-1 md:gap-3 w-[154px] h-[104px] md:w-[183px] md:h-[225px] bg-white shadow-md rounded-xl'>
        <div className='flex justify-between ite pr-5'>
          <div className='m-2'>
            <StarIcon />
          </div>
          <PointsMenu options={optionsMenu} />
        </div>
        <div className='flex justify-center'>
          <Image
            width='35'
            height='35'
            src={profile?.img_avatar || ''}
            alt='author'
            className='rounded-full border border-[#FF8C00]'
          />
        </div>
        <div className='flex justify-center items-center'>
          <p className='flex items-center gap-1 text-sm font-medium text-black'>
            {profile?.name} <NotificationIcon />
          </p>
        </div>
        <div className='hidden md:flex justify-center'>
          <p className='text-xs text-black text-center'>{profile?.bio || 'No posee biografia'}</p>
        </div>
        <button className='btn-primary hidden md:inline-block w-28 h-8 self-center'>Ver Perfil</button>
      </div>
      <Toaster position='top-center' richColors />
    </>
  );
};
export default CardFollowed;
