import { HeartIcon } from '@/icons';

const BtnFavorite = () => {
  return (
    <div className='tooltip tooltip-bottom' data-tip='❤️ 26'>
      <div className='flex justify-center items-center w-9 h-9 bg-gray-500 rounded-full'>
        <HeartIcon width={25} height={25} color='#fff' />
      </div>
    </div>
  );
};
export default BtnFavorite;
