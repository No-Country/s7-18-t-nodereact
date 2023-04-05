import Image from 'next/image';
import { CardThumbnailsRecipe } from '../components';

const recipes = new Array(20).fill('');

const page = () => {
  return (
    <div className='flex flex-col items-center gap-5 w-full h-full mx-auto pt-1'>
      <Image
        width={1366}
        height={500}
        src={'/hero-explore.png'}
        alt='hero'
        className='w-[80%] md:w-[98%] lg:w-[82%] xl:w-[88%] 2xl:w-[98%] h-64'
      />
      <div className='flex flex-wrap justify-center gap-3 p-1 w-full'>
        {recipes.map((el, idx) => (
          <CardThumbnailsRecipe key={idx} />
        ))}
      </div>
    </div>
  );
};
export default page;

/* 
<div className='w-11/12 h-full mx-auto pt-1'>
      <div className='w-full h-2/6 sm:h-1/2 md:h-3/5 lg:h-2/5 xl:h-4/6 2xl:h-4/5 bg-contain bg-no-repeat bg-[url("/hero-explore.png")]'></div>
      <div className='flex flex-wrap justify-center gap-3 p-1 w-full'>
        {recipes.map((el, idx) => (
          <CardThumbnailsRecipe key={idx} />
        ))}
      </div>
    </div>

*/
