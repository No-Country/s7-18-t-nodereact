'use client';

import Image from 'next/image';
import { IRecipe } from '../Modals/ModalNewRecipe/ModalNewRecipe';
import BoxSocial from './BoxSocial';
import { CutleryIcon } from '@/icons';
import { useEffect, useState } from 'react';
import '@splidejs/react-splide/css';
import Link from 'next/link';

interface Props {
  recipe: IRecipe;
}

const CardImage = ({ recipe }: Props) => {
  const [images, setImages] = useState<string[]>([]);
  const [indexImage, setIndexImage] = useState<number>(0);

  useEffect(() => {
    setImages(recipe.images);
  }, [recipe.images]);

  return (
    <div className='relative flex flex-col overflow-hidden justify-between w-full h-[360px] rounded-2xl'>
      <Image
        width='600'
        height='600'
        src={images[indexImage]}
        alt='image'
        className='absolute top-0 left-0 w-full h-full z-0'
      />

      <header className='flex justify-between p-2'>
        <h3 className='font-semibold px-4 py-1 bg-white/50 rounded-full z-10'>{recipe.title}</h3>
        <Link
          href={{
                pathname: `/detailRecipe/${recipe._id}`,
                query: { route: '/home' },
              }}
          className='flex justify-center items-center w-[30px] h-[30px] rounded-full bg-white z-10'
        >
          <CutleryIcon />
        </Link>
      </header>
      <BoxSocial likes={recipe.likes || []} />
      <div className='flex justify-center items-center gap-3 z-10 mb-3'>
        {images.length > 1 &&
          images.map((image, index) => (
            <div
              key={index}
              className={`rounded-full ${
                index === indexImage ? 'w-3 h-3 bg-orange-500 ' : 'w-2 h-2 bg-white'
              }  cursor-pointer`}
              onClick={() => setIndexImage(index)}
            ></div>
          ))}
      </div>
    </div>
  );
};
export default CardImage;
