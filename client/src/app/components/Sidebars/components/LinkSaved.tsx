import { ArchivedIcon } from '@/icons';
import Link from 'next/link';

const LinkSaved = () => {
  return (
    <Link href={'/explore'}>
      <div className='flex justify-start items-center gap-2 pl-4 py-4 border-b border-gray-300 hover:text-white'>
        <ArchivedIcon />
        <h3 className='text-lg font-medium'>Guardados</h3>
      </div>
    </Link>
  );
};
export default LinkSaved;
