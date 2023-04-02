import { AddIcon } from '@/icons';

const CardRecipeShare = () => {
  return (
    <div className='flex justify-between items-center h-16 w-full px-2 rounded-md shadow-md'>
      <svg width='40' height='40' viewBox='0 0 36 35' fill='none'>
        <circle cx='18' cy='17.5' r='17.5' fill='#82878B' />
      </svg>
      <h2 className='text-xs text-gray-400 w-full mx-3 py-2 px-4 rounded-full border border-stone-300 bg-base-200'>
        ¿Qué receta deseas compartir?
      </h2>
      <button className='flex justify-center items-center rounded-md p-1 border shadow-md active:shadow-none'>
        <AddIcon width={25} height={25} />
      </button>
    </div>
  );
};
export default CardRecipeShare;
