import Link from 'next/link';
import { IProfile } from '@/redux/slices/sliceUser';

interface Props {
  user: IProfile;
}

const LinkFollowers = ({user} : Props) => {
  return (
    <Link href={'/followers'}>
      <h2 className='card-title py-3 px-6 hover:text-[#ff823f]'>Seguidores {user?.followers?.length}</h2>
    </Link>
  );
};
export default LinkFollowers;
