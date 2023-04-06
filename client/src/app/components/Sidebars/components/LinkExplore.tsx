import { GlobeIcon } from '@/icons';
import Link from 'next/link';

const LinkExplore = () => {
  return (
    <Link href={'/explore'}>
      <div className='flex justify-start items-center gap-2 pl-4 py-4 border-b border-gray-300 hover:text-white'>
        <GlobeIcon />
        <h3 className='text-lg font-medium'>Explorar</h3>
      </div>
    </Link>
  );
};
export default LinkExplore;
