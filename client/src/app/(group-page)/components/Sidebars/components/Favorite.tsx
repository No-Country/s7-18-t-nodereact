import { DropdownButtonIcon, FavoriteIcon, UserIcon } from '@/icons';

const Favorite = () => {
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
      <div className='flex items-center justify-start w-full gap-2 ml-4 mt-1 hover:cursor-pointer hover:text-white'>
        <UserIcon />
        <h3 className='text-sm font-medium hover:ml-1 hover:scale-110 hover:text-[#ff823f]'>Nombre Falso</h3>
      </div>
      <div className='flex items-center justify-start w-full gap-2 ml-4 mt-1 hover:cursor-pointer hover:text-white'>
        <UserIcon />
        <h3 className='text-sm font-medium hover:ml-1 hover:scale-110 hover:text-[#ff823f]'>Nombre Falso</h3>
      </div>
      <div className='flex items-center justify-start w-full gap-2 ml-4 mt-1 hover:cursor-pointer hover:text-white'>
        <UserIcon />
        <h3 className='text-sm font-medium hover:ml-1 hover:scale-110 hover:text-[#ff823f]'>Nombre Falso</h3>
      </div>
    </details>
  );
};
export default Favorite;
