import { ArchivedIcon, GlobeIcon, HomeIcon } from '@/icons';
import Favorite from './Favorite';
import Logout from './Logout';
import Notification from './Notification';
import Profile from './Profile';
import Stat from './Stats';

const SidebarUser = () => {
  return (
    <div className='relative flex flex-col justify-start w-full h-full bg-gradient-to-b from-[#ff823f] to-[#ffd700]'>
      <div className='flex flex-col justify-between rounded-none pb-3 w-full h-60 bg-cover bg-no-repeat bg-blend-overlay blur-sm bg-[url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80")]'></div>
      <div className='absolute top-1 left-1 w-full h-60 flex flex-col justify-between pb-8'>
        <h2 className='text-white font-bold text-xl p-1 pl-4'>MENÚ</h2>
        <Profile />
        <Stat />
      </div>
      <div className='h-16 flex justify-start items-center gap-2 pl-4 border-b border-gray-300'>
        <HomeIcon />
        <h3 className='text-lg font-medium'>Inicio</h3>
      </div>
      <div className='h-16 flex justify-start items-center gap-2 pl-4 border-b border-gray-300'>
        <GlobeIcon />
        <h3 className='text-lg font-medium'>Explorar</h3>
      </div>
      <div className='h-16 flex justify-start items-center gap-2 pl-4 border-b border-gray-300'>
        <ArchivedIcon width={20} height={20} />
        <h3 className='text-lg font-medium'>Guardados</h3>
      </div>
      <Favorite />
      <Notification />

      <Logout />
    </div>
  );
};
export default SidebarUser;
