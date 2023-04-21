import { ArchivedIcon } from '@/icons';

const ButtonArchived = () => {
  return (
    <button className='flex justify-center items-center w-8 h-8 rounded-full bg-white opacity-50 hover:opacity-75 m-1 xl:mt-4  2xl:m-1 z-10'>
      <ArchivedIcon width={20} height={20} />
    </button>
  );
};
export default ButtonArchived;
