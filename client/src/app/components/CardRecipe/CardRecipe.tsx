import noImage from '../../../icons/assets/no-image.jpg';
import Image from 'next/image';
import { CommentBalloonIcon, HeartIcon } from '@/icons';

const CardRecipe = () => {
  return (
    <div className='flex flex-col justify-between w-48 h-52 rounded-md shadow-md bg-base-200 hover:outline outline-1 outline-[#ff823f] cursor-pointer'>
      <h2 className='text-xs p-2'>Título</h2>
      <Image width={150} height={150} src={noImage} alt='no image' className='self-center' />
      <div className='flex justify-end items-center gap-1 p-1'>
        <HeartIcon width={15} height={15} />
        <p className='text-xs mr-2'>218</p>
        <CommentBalloonIcon width={15} height={15} />
        <p className='text-xs mr-2'>18</p>
      </div>
    </div>
  );
};
export default CardRecipe;
