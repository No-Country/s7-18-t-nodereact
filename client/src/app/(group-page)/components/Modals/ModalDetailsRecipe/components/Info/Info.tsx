import { EasyIcon, GeometryIcon, UsersGroup } from '@/icons';

const Info = () => {
  return (
    <div className='flex justify-between px-6'>
      <div className='flex flex-col items-center text-sm text-gray-400'>
        <div className='flex gap-2 text-lg text-black'>
          <EasyIcon />
          Fácil
        </div>
        Dificultad
      </div>
      <div className='flex flex-col items-center text-sm text-gray-400'>
        <div className='flex gap-2 text-lg text-black'>
          <GeometryIcon />
          Pastas
        </div>
        Categorias
      </div>
      <div className='flex flex-col items-center text-sm text-gray-400'>
        <div className='flex gap-2 text-lg text-black'>
          <UsersGroup />4
        </div>
        Porciones
      </div>
    </div>
  );
};
export default Info;
