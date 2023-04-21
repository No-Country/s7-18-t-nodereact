'use client';
import { DropdownButtonIcon, FavoriteIcon, UserIcon } from '@/icons';
import { useAppSelector } from '@/redux/hooks';
import { useEffect, useState } from 'react';
import axiosApi from '@/app/libs/axios';
import Image from 'next/image';

type TFavoritesName = {
  name: string;
  avatar: string;
};

const Favorite = () => {
  const [favoritesName, setFavoritesName] = useState<TFavoritesName[]>([]);
  const favoriteUser = useAppSelector((state) => state.userReducer.user.favoriteUsers);

  useEffect(() => {
    setFavoritesName([]);
    favoriteUser.forEach((el) =>
      axiosApi
        .get(`users/profile/${el}`)
        .then(({ data }) =>
          setFavoritesName((prev) => (prev = [...prev, { name: data.name, avatar: data.img_avatar }]))
        )
    );
  }, [favoriteUser]);

  return (
    <details className='pl-4 border-y border-gray-300 py-4 hover:border-[#ff823f]'>
      <summary className='flex items-center justify-between w-full pr-4 list-none'>
        <div className='flex items-center gap-2'>
          <FavoriteIcon />
          <h3 className='text-lg font-medium hover:cursor-pointer hover:ml-2 hover:scale-125 hover:text-[#ff823f]'>
            Favoritos
          </h3>
        </div>
        <DropdownButtonIcon />
      </summary>
      {favoritesName.length &&
        favoritesName.map(({ name, avatar }) => (
          <div
            key={name}
            className='flex items-center justify-start w-full gap-2 ml-4 mt-1 hover:cursor-pointer hover:text-white'
          >
            <Image
              width='25'
              height='25'
              src={avatar || ''}
              alt='author'
              className='rounded-full w-[25px] h-[25px] border border-[#FF8C00]'
            />
            <h3 className='text-sm font-medium hover:ml-1 hover:scale-110 hover:text-[#ff823f]'>{name}</h3>
          </div>
        ))}
    </details>
  );
};
export default Favorite;
