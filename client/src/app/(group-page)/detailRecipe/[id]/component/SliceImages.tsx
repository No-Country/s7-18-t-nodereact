'use client';

import { ChevronLeft, ChevronRight } from '@/icons';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  images: string[];
}

const SliceImages = ({ images }: Props) => {
  const [indexImage, setIndexImage] = useState<number>(0);

  const handleLeft = () => (indexImage ? setIndexImage((prev) => prev - 1) : setIndexImage(images.length - 1));

  const handleRight = () => (indexImage < images.length - 1 ? setIndexImage((prev) => prev + 1) : setIndexImage(0));

  return (
    <div className='relative flex flex-col justify-end w-full h-[400px] rounded-2xl'>
      <Image
        width={800}
        height={800}
        src={images[indexImage]}
        alt='image'
        className='absolute top-0 left-0 w-full h-full z-0 object-cover'
      />
      <div className='absolute top-1/2 left-2 z-10 cursor-pointer hover:scale-125' onClick={handleLeft}>
        <ChevronLeft width='40' height='40' />
      </div>
      <div className='absolute top-1/2 right-20 z-10 cursor-pointer hover:scale-125' onClick={handleRight}>
        <ChevronRight width='40' height='40' />
      </div>
      <div className='flex justify-center items-center gap-3 z-10 mb-3'>
        {images.length > 1 &&
          images.map((_image, index) => (
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
export default SliceImages;
