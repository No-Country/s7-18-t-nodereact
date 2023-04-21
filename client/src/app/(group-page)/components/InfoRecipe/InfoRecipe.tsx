import { EasyIcon, GeometryIcon, UsersGroup } from '@/icons';
interface Props {
  difficulty: string;
  category: string[];
  portions: string;
}

const InfoRecipe = ({ difficulty, category, portions }: Props) => {
  return (
    <div className='flex justify-center items-center w-11/12 gap-10 mx-auto my-3'>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center gap-2'>
          <EasyIcon />
          <h3 className='text-sm font-medium'>{difficulty}</h3>
        </div>
        <h3 className='text-gray-400'>Dificultad</h3>
      </div>
      <div className='flex flex-col max-w-xs'>
        <div className='flex flex-col items-center gap-2'>
          <GeometryIcon />
          <h3 className='text-sm font-medium text-center'>{category.join(' - ')}</h3>
        </div>
        <h3 className='text-gray-400 text-center'>Categorías</h3>
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center gap-2'>
          <UsersGroup />
          <h3 className='text-sm font-medium'>{portions}</h3>
        </div>
        <h3 className='text-gray-400'>Porciones</h3>
      </div>
    </div>
  );
};
export default InfoRecipe;
