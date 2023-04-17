'use client';

import { CommentBalloonIcon, CutleryIcon, HeartIcon } from '@/icons';
import { useAppDispatch } from '@/redux/hooks';
import { showModal } from '@/redux/slices/sliceModals';
import { IRecipe } from '../Modals/ModalNewRecipe/ModalNewRecipe';
import Image from 'next/image';

interface Props {
  recipe: IRecipe;
}

const CardThumbnailsRecipe = ({ recipe }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <>
      {recipe ? (
        <div
          className='relative flex flex-col justify-between w-[240px] h-[260px] lg:w-[200px] lg:h-[220px] 
                    xl:w-[240px] xl:h-[260px] 3xl:w-[280px] 3xl:h-[300px]
                    rounded-md shadow-md hover:outline outline-1
                    outline-[#ff823f] cursor-pointer overflow-hidden'
          onClick={() => dispatch(showModal('modalDetailsRecipe'))}
        >
          <Image
            width='240'
            height='300'
            src={recipe.images[0]}
            alt={recipe.title}
            className='absolute top-0 left-0 w-full h-full z-0'
          />
          <header className='flex justify-between z-10 p-2'>
            <h3 className='flex items-center text-xs px-2 rounded-md bg-white/30 text-white'>{recipe.title}</h3>
            <div className='flex justify-center items-center w-[30px] h-[30px] rounded-full bg-white'>
              <CutleryIcon />
            </div>
          </header>
          <div className=' flex justify-center w-full h-8 mb-2 z-10'>
            <div className='flex justify-center items-center gap-2 bg-black/30 w-28 rounded-md'>
              <HeartIcon width={16} height={16} color='#fff' />
              <p className='text-xs mr-2 text-white'>{recipe.likes?.length}</p>
              <CommentBalloonIcon width={15} height={15} color='#fff' opacity='1' />
              <p className='text-xs mr-2 text-white'>18</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default CardThumbnailsRecipe;
