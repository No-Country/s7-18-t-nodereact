//review
import { AvatarIcon, FavoriteIcon, PointsMenuIcon } from '@/icons';

const CardFollowers = () => {
  return (
    <section>
      <div className='flex flex-col items-center w-48 h-56 border border-gray-200 shadow-lg rounded-xl'>
        <div className='flex justify-end items-center w-full h-10 px-2'>
          <PointsMenuIcon />
        </div>
        <AvatarIcon width={60} height={60} />
        <h2 className='text-md font-medium mb-2 text-black'>Nombre Usuario</h2>
        <p className='text-xs text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
        <button className='btn btn-sm btn-outline rounded-md mt-3'>Ver Perfil</button>
      </div>
    </section>
  );
};
export default CardFollowers;
