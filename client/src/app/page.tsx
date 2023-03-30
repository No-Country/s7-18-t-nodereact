import { ArchivedIcon, ArrowLeft } from '@/icons';
import { InfoRecipe, Ingredients, Preparation, TitleRecipe } from './components';

export default function Home() {
  return (
    <div className='flex flex-col justify-start items-center h-full w-full'>
      <div className='flex flex-col justify-between w-full lg:w-[80%] h-2/5 xl:h-4/5 xl:w-1/2 bg-cover bg-left-top sm:bg-center lg:bg-contain bg-no-repeat bg-[url("https://lacomidatipica.com/wp-content/uploads/2019/02/tacos1.jpg")]'>
        <div className='flex justify-between w-full h-6 lg:pt-3 2xl:px-8'>
          <div className='m-1 xl:mt-4 2xl:m-1'>
            <ArrowLeft width={32} height={32} />
          </div>
          <button className='flex justify-center items-center w-8 h-8 rounded-full bg-white opacity-50 hover:opacity-75 m-1 xl:mt-4  2xl:m-1'>
            <ArchivedIcon width={20} height={20} />
          </button>
        </div>
        <TitleRecipe />
      </div>
      <InfoRecipe />
      <Ingredients />
      <Preparation />
    </div>
  );
}
