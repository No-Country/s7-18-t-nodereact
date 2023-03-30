import { EasyIcon, GeometryIcon, UsersGroup } from '@/icons';

const InfoRecipe = () => {
  return (
    <div className='flex justify-center items-center w-auto gap-16'>
      <div className='flex flex-col'>
        <div className='flex justify-center items-center gap-2'>
          <EasyIcon />
          <h3 className='text-lg font-medium'>Fácil</h3>
        </div>
        <h3 className='text-gray-400'>Dificultad</h3>
      </div>
      <div className='flex flex-col'>
        <div className='flex gap-2'>
          <GeometryIcon />
          <h3 className='text-lg font-medium'>Pastas</h3>
        </div>
        <h3 className='text-gray-400'>Categorías</h3>
      </div>
      <div className='flex flex-col'>
        <div className='flex gap-2'>
          <UsersGroup />
          <h3 className='text-lg font-medium'>4</h3>
        </div>
        <h3 className='text-gray-400'>Porciones</h3>
      </div>
    </div>
  );
};
export default InfoRecipe;
