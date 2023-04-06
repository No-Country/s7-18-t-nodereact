import Link from 'next/link';

const LinkFollowers = () => {
  return (
    <Link href={'/followers'}>
      <h2 className='card-title py-3 px-6 hover:text-[#ff823f]'>Seguidores 132</h2>
    </Link>
  );
};
export default LinkFollowers;
