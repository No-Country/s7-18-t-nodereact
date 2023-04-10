import { ArchivedIcon } from '@/icons';
import Link from 'next/link';

const LinkSaved = () => {
  return (
    <Link href={'/explore'}>
      <div className='flex justify-start items-center gap-2 pl-4 py-4 border-y border-gray-300 hover:border-[#ff823f]'>
        <ArchivedIcon />
        <h3 className='text-lg font-medium hover:ml-2 hover:scale-125 hover:text-[#ff823f]'>Guardados</h3>
      </div>
    </Link>
  );
};
export default LinkSaved;
