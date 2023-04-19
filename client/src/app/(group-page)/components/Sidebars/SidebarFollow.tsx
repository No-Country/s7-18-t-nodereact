'use client';

import { useAppSelector } from '@/redux/hooks';
import { LinkFollowed, LinkFollowers } from './components';
import ProfileFollowing from './components/ProfileFollowing';
import ProfileFollowers from './components/ProfileFollowers';
// import { useSelector } from 'react-redux';
// import type { RootState } from '../../../../redux/store'

const SidebarFollow = () => {
  const { user } = useAppSelector((state) => state.userReducer);

  // const profile = useSelector((state: RootState) => state.userReducer);

  return (
    <div className='flex flex-col justify-center items-center w-full h-full gap-10 py-4'>
      <div className='card w-[90%] bg-stone-100 border-2 shadow-md h-[45%] py-2'>
        <LinkFollowed user={user} />
        <div className='card-body overflow-y-auto'>
          <div className='flex items-center flex-wrap gap-5'>
            {user?.following.map((res) => (
              <ProfileFollowing res={res} key={res} />
            ))}
          </div>
        </div>
      </div>
      <div className='card w-[90%] bg-stone-100 border-2 shadow-md h-[45%] py-2'>
        <LinkFollowers user={user} />
        <div className='card-body overflow-y-auto'>
          <div className='flex items-center flex-wrap gap-5'>
            {user?.followers.map((res) => (
              <ProfileFollowers res={res} key={res} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SidebarFollow;
// Seguidores 132
