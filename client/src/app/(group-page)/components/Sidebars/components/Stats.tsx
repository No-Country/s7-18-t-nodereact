'use client';

import { IProfile } from '@/redux/slices/sliceUser';
import { Statfollowed, Statfollowers, StatPublications } from '../../Stats';

interface Props {
  user: IProfile;
}

const Stats = ({ user: { posts, followers, following } }: Props) => {
  return (
    <div className='flex justify-center items-start py-0 px-["5px"] gap-["10px"]'>
      <StatPublications posts={posts} />
      <Statfollowers followers={followers} />
      <Statfollowed following={following} />
    </div>
  );
};
export default Stats;

/* absolute top-44 left-12 */
