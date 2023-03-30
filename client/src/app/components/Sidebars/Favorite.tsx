import { FavoriteIcon, UserIcon } from '@/icons';

const Favorite = () => {
  return (
    <div className='h-48 flex flex-col justify-start items-center gap-2 pl-4 px-4 border-b-2 border-gray-300'>
      <div className='flex items-center justify-start w-full gap-2 mb-5 mt-3'>
        <FavoriteIcon />
        <h3 className='text-xl font-medium'>Favoritos</h3>
      </div>
      <div className='flex items-center justify-start w-full gap-2'>
        <UserIcon />
        <h3 className='text-xl font-medium'>Nombre Falso</h3>
      </div>
      <div className='flex items-center justify-start w-full gap-2'>
        <UserIcon />
        <h3 className='text-xl font-medium'>Nombre Falso</h3>
      </div>
      <div className='flex items-center justify-start w-full gap-2'>
        <UserIcon />
        <h3 className='text-xl font-medium'>Nombre Falso</h3>
      </div>
    </div>
  );
};
export default Favorite;
