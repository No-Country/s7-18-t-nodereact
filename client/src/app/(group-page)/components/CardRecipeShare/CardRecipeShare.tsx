'use client';

import { AddIcon } from '@/icons';
import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image';

const CardRecipeShare = () => {
  const image = useAppSelector((state) => state.userReducer.user.img_avatar);

  return (
    <div className='flex justify-between items-center py-2 w-[90%] sm:w-[400px] px-2 rounded-md shadow-md'>
      <Image width='35' height='35' src={image || ''} alt='author' className='rounded-full border border-[#FF8C00]' />
      <h2 className='text-xs text-gray-400 w-full mx-3 py-2 px-4 rounded-full border border-stone-300 bg-base-200'>
        ¿Qué receta deseas compartir?
      </h2>
      <button className='flex justify-center items-center rounded-md p-1 border shadow-md active:shadow-none'>
        <AddIcon width={25} height={25} />
      </button>
    </div>
  );
};
export default CardRecipeShare;
