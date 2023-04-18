'use client';

import Image from 'next/image';
import { IRecipe } from '../Modals/ModalNewRecipe/ModalNewRecipe';
import BoxSocial from './BoxSocial';
import { CutleryIcon } from '@/icons';
import { useState } from 'react';

interface Props {
  recipe: IRecipe;
}

const CardImage = ({ recipe }: Props) => {
  const [images, setState] = useState([...recipe.images]);
  return (
    <div className='relative flex flex-col justify-between w-full h-[360px] '>
      <Image
        width='500'
        height='600'
        src={images[0]}
        alt={recipe.title}
        className='absolute top-0 left-0 w-full h-full z-0'
      />
      <header className='flex justify-between p-2'>
        <h3 className='font-semibold px-4 py-1 bg-white/50 rounded-full z-10'>{recipe.title}</h3>
        <div className='flex justify-center items-center w-[30px] h-[30px] rounded-full bg-white z-10'>
          <CutleryIcon />
        </div>
      </header>
      <BoxSocial likes={recipe.likes || []} />
      <footer className='w-full text-6xl text-center text-gray-200'>...</footer>
    </div>
  );
};
export default CardImage;
