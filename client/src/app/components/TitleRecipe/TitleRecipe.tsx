import Image from 'next/image';
import { AR } from './AR';

const TitleRecipe = () => {
  return (
    <div className='w-max h-16 bg-slate-300 opacity-60 ml-3 mb-10 p-2'>
      <h2 className='text-lg font-bold text-black'>Titulo de la receta</h2>
      <div className='flex gap-3'>
        <h3 className='text-sm text-black'>Buenos Aires - Argentina </h3>
        <Image width='30' height='20' src={AR} alt='AR' />
      </div>
    </div>
  );
};
export default TitleRecipe;
