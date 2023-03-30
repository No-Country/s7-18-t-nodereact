import { NotificationIcon, UserIcon } from '@/icons';

const Notification = () => {
  return (
    <div className='h-48 flex flex-col justify-start items-center gap-2 pl-4 px-4'>
      <div className='flex items-center justify-start w-full gap-2 mb-5 mt-3'>
        <NotificationIcon />
        <h3 className='text-xl font-medium'>Notificación</h3>
      </div>
      <div className='flex items-center justify-start w-full gap-2'>
        <UserIcon />
        <h3 className='text-xl font-medium'>Nombre Falso</h3>
      </div>
      <div className='flex items-center justify-start w-full gap-2'>
        <UserIcon />
        <h3 className='text-xl font-medium'>Nombre Falso</h3>
      </div>
      <div className='flex items-center justify-start w-full gap-2'>
        <UserIcon />
        <h3 className='text-xl font-medium'>Nombre Falso</h3>
      </div>
    </div>
  );
};
export default Notification;
