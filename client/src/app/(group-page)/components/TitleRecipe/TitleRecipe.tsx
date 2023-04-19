import Image from 'next/image';
import { AR } from './AR';

interface Props {
  title: string;
  country: string;
}

const TitleRecipe = ({ title, country }: Props) => {
  return (
    <div className='w-max h-16 bg-slate-300 opacity-60 ml-5 mb-8 p-2'>
      <h2 className='text-lg font-bold text-black'>{title}</h2>
      <div className='flex gap-3'>
        <h3 className='text-md font-semibold text-black'>{country}</h3>
        <Image width='30' height='20' src={AR} alt='AR' />
      </div>
    </div>
  );
};
export default TitleRecipe;
