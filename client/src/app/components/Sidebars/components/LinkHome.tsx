import { HomeIcon } from '@/icons';
import Link from 'next/link';

const LinkHome = () => {
  return (
    <Link href={'/'}>
      <div className='flex justify-start items-center gap-2 pl-4 py-4 border-b border-gray-300 hover:text-white'>
        <HomeIcon />
        <h3 className='text-lg font-medium'>Inicio</h3>
      </div>
    </Link>
  );
};
export default LinkHome;
