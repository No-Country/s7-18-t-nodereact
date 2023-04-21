'use client';

import Image from 'next/image';
import { LinkExplore, LinkHome, LinkSaved, Notification, Profile, Stats } from './components';
import Favorite from './components/Favorite';
import Logout from './components/Logout';
import { useAppSelector } from '@/redux/hooks';

const SidebarUser = () => {
  const { user } = useAppSelector((state) => state.userReducer);

  return (
    <div className='relative flex flex-col justify-start w-full h-full bg-orange-50'>
      <div className='relative w-full h-60 overflow-hidden'>
        <Image
          width='400'
          height='600'
          src='/pizza.png'
          alt='pizza'
          className='absolute top-0 left-0 w-full h-full blur-[3px] z-0'
        />
      </div>
      <div className='absolute top-1 left-1 w-full h-60 flex flex-col justify-between pb-8 z-10'>
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
