import { PointsMenu } from '@/app/(group-page)/components';
import { AvatarIcon, EyeSlashIcon, TrashIcon } from '@/icons';

const optionsMenu = [
  {
    label: 'Eliminar',
    icon: <TrashIcon />,
    action: () => {},
  },
  {
    label: 'Ocultar',
    icon: <EyeSlashIcon />,
    action: () => {},
  },
];

const CardFollower = () => {
  return (
    <div className='flex flex-col gap-1 md:gap-3 w-[154px] h-[104px] md:w-[183px] md:h-[225px] bg-white shadow-md rounded-xl'>
      <div className='flex justify-end pr-5'>
        <PointsMenu options={optionsMenu} />
      </div>
      <div className='flex justify-center'>
        <AvatarIcon width={30} height={30} />
      </div>
      <div className='flex justify-center'>
        <p className='text-md font-medium text-black'>Nombre Usuario</p>
      </div>
      <div className='hidden md:flex justify-center'>
        <p className='text-xs text-black text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <button className='btn-primary hidden md:inline-block w-28 h-8 self-center'>Ver Perfil</button>
    </div>
  );
};
export default CardFollower;
