'use client';

import { Statfollowed, Statfollowers, StatPublications } from '..';
import { useAppSelector } from '@/redux/hooks';

const CardStats = () => {
  const {
    user: { posts, followers, following },
  } = useAppSelector((state) => state.userReducer);

  return (
    <div className='stats stats-horizontal shadow'>
      <div className='stat'>
        <StatPublications posts={posts} textColor='Black' />
      </div>

      <div className='stat'>
        <Statfollowers followers={followers} textColor='Black' />
      </div>

      <div className='stat'>
        <Statfollowed following={following} textColor='Black' />
      </div>
    </div>
  );
};
export default CardStats;
