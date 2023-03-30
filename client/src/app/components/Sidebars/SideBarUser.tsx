import { ArchivedIcon, GlobeIcon, HomeIcon } from '@/icons';
import Favorite from './Favorite';
import Logout from './Logout';
import Notification from './Notification';
import Stat from './Stats';

const SidebarUser = () => {
  return (
    <div className='relative flex flex-col justify-start w-full h-full bg-stone-200'>
      <div className='flex flex-col justify-between rounded-none pb-3 w-full h-72 bg-cover bg-no-repeat bg-blend-overlay bg-[url("https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80")]'>
        <h2 className='text-white font-bold text-xl p-1 pl-4'>MENÚ</h2>
        <Stat />
      </div>
      <div className='h-16 flex justify-start items-center gap-2 pl-4 border-b-2 border-gray-300'>
        <HomeIcon />
        <h3 className='text-xl font-medium'>Inicio</h3>
      </div>
      <div className='h-16 flex justify-start items-center gap-2 pl-4 border-b-2 border-gray-300'>
        <GlobeIcon />
        <h3 className='text-xl font-medium'>Explorar</h3>
      </div>
      <div className='h-16 flex justify-start items-center gap-2 pl-4 border-b-2 border-gray-300'>
        <ArchivedIcon />
        <h3 className='text-xl font-medium'>Guardados</h3>
      </div>
      <Favorite />
      <Notification />

      <Logout />
    </div>
  );
};
export default SidebarUser;
