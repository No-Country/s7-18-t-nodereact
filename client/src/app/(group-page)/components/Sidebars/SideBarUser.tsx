'use client';

import { LinkExplore, LinkHome, LinkSaved, Notification, Profile, Stats } from './components';
import Favorite from './components/Favorite';
import Logout from './components/Logout';
import { useAppSelector } from '@/redux/hooks';

const SidebarUser = () => {
  const { user } = useAppSelector((state) => state.userReducer);

  return (
    <div className='relative flex flex-col justify-start w-full h-full bg-base-200'>
      <div className='flex flex-col justify-between rounded-none pb-3 w-full h-60 bg-cover bg-no-repeat bg-blend-overlay blur-sm bg-[url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80")]'></div>
      <div className='absolute top-1 left-1 w-full h-60 flex flex-col justify-between pb-8'>
        <h2 className='text-white font-bold text-xl p-1 pl-4'>MENÚ</h2>
        <Profile user={user} />
        <Stats user={user} />
      </div>
      <LinkHome />

      <LinkExplore />

      <LinkSaved />

      <Favorite />
      <Notification />

      <Logout />
    </div>
  );
};
export default SidebarUser;
