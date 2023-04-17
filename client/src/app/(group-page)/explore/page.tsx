import Image from 'next/image';
import { ThumbnailsRecipes } from '../components';
import axios from 'axios';

const getRecipes = async () => {
  try {
    const { data } = await axios.get(`${process.env.SERVER_URL_BASE}/posts/posts/ordered`);
    return data;
  } catch (error) {
    console.log('Error al obtener los posts');
  }
};

const page = async () => {
  const recipes = await getRecipes();
  return (
    <div className='flex flex-col items-center gap-5 w-full h-full mx-auto pt-1 2xl:w-3/4'>
      <Image
        width={1366}
        height={500}
        src={'/hero-explore.png'}
        alt='hero'
        className='w-[80%] md:w-[98%] lg:w-[82%] xl:w-[88%] 2xl:w-[98%] 3xl:w-[90%] h-80'
      />
      <ThumbnailsRecipes recipes={recipes} />
    </div>
  );
};
export default page;
