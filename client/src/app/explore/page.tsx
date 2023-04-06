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
        className='w-[80%] md:w-[98%] lg:w-[82%] xl:w-[88%] 2xl:w-[98%] 3xl:w-[90%] h-80'
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
