'use client';

import { AddUserIcon, AvatarIcon, EyeSlashIcon, RemoveUserIcon, StarIcon } from '@/icons';
import CardImage from './CardImage';
import LikesUsers from './LikesUsers';
import { IRecipe } from '../Modals/ModalNewRecipe/ModalNewRecipe';
import {
  IProfile,
  addFavoriteUsers,
  addFollowing,
  removeFavoriteUsers,
  removeFollowing,
} from '@/redux/slices/sliceUser';
import { useEffect, useState } from 'react';
import axiosApi from '@/app/libs/axios';
import Image from 'next/image';
import PointsMenu from '../PointsMenu/PointsMenu';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Toaster, toast } from 'sonner';

interface Props {
  recipe: IRecipe;
}

const CardRecipe = ({ recipe }: Props) => {
  const [author, setAuthor] = useState<IProfile | null>(null);
  const { _id, following, favoriteUsers } = useAppSelector((state) => state.userReducer.user);
  const token = useAppSelector((state) => state.userReducer.token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    axiosApi.get(`/users/profile/${recipe.author}`).then(({ data }) => setAuthor(data));
  }, [recipe.author]);

  const optionsMenu = [
    {
      label: favoriteUsers?.includes(recipe.author) ? 'Quitar de favoritos' : 'Añadir a favoritos',
      icon: <StarIcon />,
      action: async () => {
        if (recipe.author === _id) return toast.error('No se puede agregar a favoritos a uno mismo');
        if (favoriteUsers?.includes(recipe.author)) {
          try {
            await axiosApi.delete(`/users/favorite-users`, {
              headers: { authorization: `Bearer ${token}` },
              data: {
                userId: _id,
                userToRemoveId: recipe.author,
              },
            });
            dispatch(removeFavoriteUsers(recipe.author));
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
                userToAddId: recipe.author,
              },
              {
                headers: { authorization: `Bearer ${token}` },
              }
            ),
              dispatch(addFavoriteUsers(recipe.author));
            toast.success('Favoritos actualizado');
          } catch (error) {
            toast.error('Hubo un error al actualizar favoritos');
          }
        }
      },
    },
    {
      label: following?.includes(recipe.author) ? 'Dejar de seguir' : 'Seguir',
      icon: following?.includes(recipe.author) ? <RemoveUserIcon /> : <AddUserIcon />,
      action: async () => {
        if (recipe.author === _id) return toast.error('No se puede seguirse a uno mismo');
        if (following?.includes(recipe.author)) {
          try {
            await axiosApi.delete(`/users/unfollow/${_id}`, {
              headers: { authorization: `Bearer ${token}` },
              data: {
                userToUnfollowId: recipe.author,
              },
            });
            dispatch(removeFollowing(recipe.author));
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
                userToFollowId: recipe.author,
              },
              {
                headers: { authorization: `Bearer ${token}` },
              }
            ),
              dispatch(addFollowing(recipe.author));
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
      <div className='flex flex-col w-full max-w-[440px] sm:p-6 rounded-2xl shadow-md'>
        <header className='flex px-3 w-full justify-between mb-5'>
          <div className='flex items-center'>
            {author?.img_avatar ? (
              <Image
                width='40'
                height='40'
                src={author?.img_avatar}
                alt='author'
                className='rounded-full border border-[#FF8C00]'
              />
            ) : (
              <AvatarIcon />
            )}
            <h3 className='ml-3 font-semibold'>{author?.name || 'Nombre Usuario'}</h3>
          </div>
          <PointsMenu options={optionsMenu} />
        </header>
        <CardImage recipe={recipe} />
        <LikesUsers />
        <p className='text-[0.7rem] ml-2 text-slate-500'>ver los 5 comentarios</p>
        <div className='flex items-center gap-1 m-1  mb-4'>
          <div className='avatar border-1 border-slate-400'>
            <div className='w-4 h-4 bg-slate-400 rounded-full'></div>
          </div>
          <p className='text-xs text-gray-500'>Añade un comentario...</p>
        </div>
      </div>
      <Toaster position='top-center' richColors />
    </>
  );
};
export default CardRecipe;
