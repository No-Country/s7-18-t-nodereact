import { ArchivedIcon } from '@/icons';

const BtnArchive = () => {
  return (
    <div className='relative flex flex-col items-center group'>
      <div className='flex justify-center items-center w-9 h-9 bg-gray-500 rounded-full'>
        <ArchivedIcon width={25} height={25} color='#fff' />
      </div>
      <div className='absolute top-0 flex-col items-center hidden mt-6 group-hover:flex'>
        <div className='min-w-max h-3 -mb-2 rotate-45 bg-black'></div>
        <span className='relative z-10 min-w-max p-2 text-xs leading-none text-white whitespace-no-wrap rounded-md bg-black shadow-lg flex items-center gap-2'>
          <ArchivedIcon width={16} height={16} color='#ff0000' />
          26
        </span>
      </div>
    </div>
  );
};
export default BtnArchive;
