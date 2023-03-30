import { NotificationIcon, UserIcon } from '@/icons';

const Notification = () => {
  return (
    <div className='h-32 flex flex-col justify-start items-center gap-1 pl-4 px-4'>
      <div className='flex items-center justify-start w-full gap-2 mb-2 mt-2'>
        <NotificationIcon />
        <h3 className='text-lg font-medium'>Notificación</h3>
      </div>
      <div className='flex items-center justify-start w-full gap-2 ml-5'>
        <UserIcon />
        <h3 className='text-sm font-medium'>Nombre Falso</h3>
      </div>
      <div className='flex items-center justify-start w-full gap-2 ml-5'>
        <UserIcon />
        <h3 className='text-sm font-medium'>Nombre Falso</h3>
      </div>
      <div className='flex items-center justify-start w-full gap-2 ml-5'>
        <UserIcon />
        <h3 className='text-sm font-medium'>Nombre Falso</h3>
      </div>
    </div>
  );
};
export default Notification;
