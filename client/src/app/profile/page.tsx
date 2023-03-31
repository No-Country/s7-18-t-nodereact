import AddIcon from '@/icons/AddIcon';
import { CardProfile, CardStats } from './components'; //profile components

export default function page() {
  return (
    <div className='flex flex-col items-center my-10 gap-6'>
      <CardProfile />
      <CardStats />
      <button className='flex justify-center items-center rounded-md w-14 h-14 border shadow-md hover:bg-base-200 active:shadow-none'>
        <AddIcon width={40} height={40} />
      </button>
    </div>
  );
}
