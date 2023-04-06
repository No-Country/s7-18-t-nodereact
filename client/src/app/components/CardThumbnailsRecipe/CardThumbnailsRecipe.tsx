'use client';

import { CommentBalloonIcon, CutleryIcon, HeartIcon } from '@/icons';
import { useAppDispatch } from '@/redux/hooks';
import { showModal } from '@/redux/slices/sliceModals';

const CardThumbnailsRecipe = () => {
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => dispatch(showModal('modalDetailsRecipe'))}
      className='flex flex-col justify-between w-[240px] h-[260px] lg:w-[200px] lg:h-[220px] 
                    xl:w-[240px] xl:h-[260px] 3xl:w-[280px] 3xl:h-[300px]
                    rounded-md shadow-md bg-cover bg-right-top
                    bg-no-repeat bg-[url("/background1.png")]
                    hover:outline outline-1
                    outline-[#ff823f] cursor-pointer overflow-hidden'
    >
      <header className='flex justify-between'>
        <h3 className='text-xs p-2'>Título</h3>
        <div className='flex justify-center items-center w-[30px] h-[30px] rounded-full bg-white'>
          <CutleryIcon />
        </div>
      </header>
      <div className=' flex justify-center w-full h-8 mb-2'>
        <div className='flex justify-center items-center gap-2 bg-black/30 w-28 rounded-md'>
          <HeartIcon width={16} height={16} color='#fff' />
          <p className='text-xs mr-2 text-white'>218</p>
          <CommentBalloonIcon width={15} height={15} color='#fff' opacity='1' />
          <p className='text-xs mr-2 text-white'>18</p>
        </div>
      </div>
    </div>
  );
};
export default CardThumbnailsRecipe;
