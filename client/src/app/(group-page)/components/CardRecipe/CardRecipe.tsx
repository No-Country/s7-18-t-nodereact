'use client';

import { AddUserIcon, AvatarIcon, EyeSlashIcon, RemoveUserIcon, StarIcon } from '@/icons';
import CardImage from './CardImage';
import LikesUsers from './LikesUsers';
import { IRecipe } from '../Modals/ModalNewRecipe/ModalNewRecipe';
import { IProfile, toggleFollowed } from '@/redux/slices/sliceUser';
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
  const { _id, following, favorites } = useAppSelector((state) => state.userReducer.user);
  const token = useAppSelector((state) => state.userReducer.token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    axiosApi.get(`/users/profile/${recipe.author}`).then(({ data }) => setAuthor(data));
  }, [recipe.author]);

  const optionsMenu = [
    {
      label: favorites?.includes(recipe.author || '') ? 'Quitar de favoritos' : 'Añadir a favoritos',
      icon: <StarIcon />,
      action: () => {},
    },
    {
      label: following?.includes(recipe.author || '') ? 'Dejar de seguir' : 'Seguir',
      icon: following?.includes(recipe.author || '') ? <RemoveUserIcon /> : <AddUserIcon />,
      action: () => {
        toast.promise(
          following?.includes(recipe.author || '')
            ? axiosApi.delete(`/users/unfollow/${_id}`, {
                headers: { authorization: `Bearer ${token}` },
                data: {
                  userToUnfollowId: recipe.author,
                },
              })
            : axiosApi.post(
                '/users/follow',
                {
                  userId: _id,
                  userToFollowId: recipe.author,
                },
                {
                  headers: { authorization: `Bearer ${token}` },
                }
              ),
          {
            loading: 'Actualizando seguidores..',
            success: () => {
              dispatch(toggleFollowed(recipe.author));
              return 'Seguidores actualizado';
            },
            error: 'Hubo un error al actualizar seguidores',
          }
        );
      },
    },
    {
      label: 'Ocultar',
      icon: <EyeSlashIcon />,
      action: () => {},
    },
  ];

  /* 

axiosApi.post(
            '/users/follow',
            {
              userId: _id,
              userToFollowId: recipe.author,
            },
            {
              headers: { authorization: `Bearer ${token}` },
            }
          )

*/

  return (
    <>
      <div className='flex flex-col w-full max-w-[430px] sm:p-6 rounded-xl shadow-md'>
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

/* 

 _id?: string;
  title: string;
  preparation: string;
  category: string[];
  difficulty: string;
  ingredients: string[];
  portions: string;
  country: string;
  images: string[];
  likes?: string[];
*/
