import { PointsMenuIcon } from '@/icons';
import CardImage from './CardImage';
import LikesUsers from './LikesUsers';

const CardRecipe = () => {
  return (
    <div className='flex flex-col w-full sm:p-6 rounded-xl shadow-md'>
      <header className='flex px-3 w-full justify-between mb-5'>
        <div className='flex items-center'>
          <svg width='40' height='40' viewBox='0 0 36 35' fill='none'>
            <circle cx='18' cy='17.5' r='17.5' fill='#82878B' />
          </svg>
          <h3 className='ml-3 font-semibold'>Nombre Usuario</h3>
        </div>
        <PointsMenuIcon />
      </header>
      <CardImage />
      <LikesUsers />
      <p className='text-[0.7rem] ml-2 text-slate-500'>ver los 5 comentarios</p>
      <div className='flex items-center gap-1 m-1  mb-4'>
        <div className='avatar border-1 border-slate-400'>
          <div className='w-4 h-4 bg-slate-400 rounded-full'></div>
        </div>
        <p className='text-xs text-gray-500'>Añade un comentario...</p>
      </div>
    </div>
  );
};
export default CardRecipe;
