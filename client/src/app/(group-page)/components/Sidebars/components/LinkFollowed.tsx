import Link from 'next/link';

const LinkFollowed = () => {
  return (
    <Link href={'/followed'}>
      <h2 className='card-title py-3 px-6 hover:text-[#ff823f]'>Siguiendo 308</h2>
    </Link>
  );
};
export default LinkFollowed;
