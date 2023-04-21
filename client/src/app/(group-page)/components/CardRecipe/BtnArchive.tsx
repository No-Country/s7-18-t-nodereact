import { ArchivedIcon } from '@/icons';

const BtnArchive = () => {
  return (
    <div className='relative flex flex-col items-center group'>
      <div className='flex justify-center items-center w-9 h-9 bg-orange-200 rounded-full'>
        <ArchivedIcon width={25} height={25} color='#fff' />
      </div>
      <div className='absolute top-0 flex-col items-center hidden mt-6 group-hover:flex'>
        <div className='min-w-max h-3 -mb-2 rotate-45 bg-orange-500'></div>
        <span className='relative z-10 min-w-max p-2 text-xs leading-none text-white whitespace-no-wrap rounded-md bg-orange-500 shadow-lg flex items-center gap-2'>
          <ArchivedIcon width={16} height={16} color='#fff' />0
        </span>
      </div>
    </div>
  );
};
export default BtnArchive;
