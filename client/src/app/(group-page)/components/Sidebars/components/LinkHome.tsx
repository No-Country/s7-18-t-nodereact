import { HomeIcon } from '@/icons';
import Link from 'next/link';

const LinkHome = () => {
  return (
    <Link href={'/home'}>
      <div className='flex justify-start items-center gap-2 pl-4 py-4 border-y border-gray-300 hover:border-[#ff823f]'>
        <HomeIcon />
        <h3 className='text-lg font-medium hover:ml-2 hover:scale-125 hover:text-[#ff823f]'>Inicio</h3>
      </div>
    </Link>
  );
};
export default LinkHome;
