import { NotificationIcon, UserIcon } from '@/icons';

const Notification = () => {
  return (
    <div className='collapse collapse-arrow border-b border-gray-300'>
      <input type='checkbox' />
      <div className='collapse-title text-xl font-medium flex items-center justify-start w-full gap-2'>
        <NotificationIcon />
        <h3 className='text-lg font-medium'>Notificación</h3>
      </div>
      <div className='collapse-content'>
        <div className='flex items-center justify-start w-full gap-2 ml-4 mt-1'>
          <UserIcon />
          <h3 className='text-sm font-medium'>Nombre Falso</h3>
        </div>
        <div className='flex items-center justify-start w-full gap-2 ml-4 mt-1'>
          <UserIcon />
          <h3 className='text-sm font-medium'>Nombre Falso</h3>
        </div>
        <div className='flex items-center justify-start w-full gap-2 ml-4 mt-1'>
          <UserIcon />
          <h3 className='text-sm font-medium'>Nombre Falso</h3>
        </div>
      </div>
    </div>
  );
};
export default Notification;
