import { PointsMenu } from '@/app/components';
import { AvatarIcon, EyeSlashIcon, StarIcon, TrashIcon, NotificationIcon, RemoveUserIcon } from '@/icons';

const optionsMenu = [
  {
    label: 'Añadir a favoritos',
    icon: <StarIcon />,
  },
  {
    label: 'Dejar de seguir',
    icon: <RemoveUserIcon />,
  },
  {
    label: 'Ocultar',
    icon: <EyeSlashIcon />,
  },
];

const CardFollowed = () => {
  return (
    <div className='flex flex-col gap-1 md:gap-3 w-[154px] h-[104px] md:w-[183px] md:h-[225px] bg-white shadow-md rounded-xl'>
      <div className='flex justify-between ite pr-5'>
        <div className='m-2'>
          <StarIcon />
        </div>
        <PointsMenu options={optionsMenu} />
      </div>
      <div className='flex justify-center'>
        <AvatarIcon width={30} height={30} />
      </div>
      <div className='flex justify-center items-center'>
        <p className='flex items-center gap-1 text-sm font-medium text-black'>
          Nombre Usuario <NotificationIcon />
        </p>
      </div>
      <div className='hidden md:flex justify-center'>
        <p className='text-xs text-black text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <button className='btn-primary hidden md:inline-block w-28 h-8 self-center'>Ver Perfil</button>
    </div>
  );
};
export default CardFollowed;
