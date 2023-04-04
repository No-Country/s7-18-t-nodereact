import BoxSocial from './BoxSocial';
import { CutleryIcon } from '@/icons';

const CardImage = () => {
  return (
    <div className='flex flex-col justify-between w-full h-[360px] bg-cover bg-no-repeat bg-left-top bg-[url("https://lacomidatipica.com/wp-content/uploads/2019/02/tacos1.jpg")]'>
      <header className='flex justify-between p-2'>
        <h3 className='font-semibold'>Título de Receta</h3>
        <div className='flex justify-center items-center w-[30px] h-[30px] rounded-full bg-white'>
          <CutleryIcon />
        </div>
      </header>
      <BoxSocial />
      <footer className='w-full text-6xl text-center text-gray-200'>...</footer>
    </div>
  );
};
export default CardImage;
