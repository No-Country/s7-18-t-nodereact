import { DropdownButtonIcon, NotificationIcon, UserIcon } from '@/icons';

const Notification = () => {
  return (
    <details className='pl-4 border-b border-gray-300 py-4'>
      <summary className='flex items-center justify-between w-full pr-4 list-none'>
        <div className='flex items-center gap-2'>
          <NotificationIcon />
          <h3 className='text-lg font-medium hover:cursor-pointer hover:text-white'>Notificación</h3>
        </div>
        <DropdownButtonIcon />
      </summary>
      <div className='flex items-center justify-start w-full gap-2 ml-4 mt-1 hover:cursor-pointer hover:text-white'>
        <UserIcon />
        <h3 className='text-sm font-medium'>Nombre Falso</h3>
      </div>
      <div className='flex items-center justify-start w-full gap-2 ml-4 mt-1 hover:cursor-pointer hover:text-white'>
        <UserIcon />
        <h3 className='text-sm font-medium'>Nombre Falso</h3>
      </div>
      <div className='flex items-center justify-start w-full gap-2 ml-4 mt-1 hover:cursor-pointer hover:text-white'>
        <UserIcon />
        <h3 className='text-sm font-medium'>Nombre Falso</h3>
      </div>
    </details>
  );
};
export default Notification;
