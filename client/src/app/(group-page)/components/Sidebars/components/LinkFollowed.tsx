import { IProfile } from '@/redux/slices/sliceUser';
import Link from 'next/link';

interface Props {
  user: IProfile;
}
const LinkFollowed = ({user} : Props) => {
  return (
    <Link href={'/followed'}>
      <h2 className='card-title py-3 px-6 hover:text-[#ff823f]'>Siguiendo {user?.following?.length}</h2>
    </Link>
  );
};
export default LinkFollowed;
