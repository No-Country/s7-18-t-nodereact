import { DropdownButtonIcon, NotificationIcon, UserIcon } from '@/icons';

const Notification = () => {
  return (
    <details className='pl-4 border-t border-b-2 border-gray-300 py-4 hover:border-b hover:border-[#ff823f]'>
      <summary className='flex items-center justify-between w-full pr-4 list-none'>
        <div className='flex items-center gap-2'>
          <NotificationIcon />
          <h3 className='text-lg font-medium hover:cursor-pointer hover:ml-2 hover:scale-125 hover:text-[#ff823f]'>
            Notificación
          </h3>
        </div>
        <DropdownButtonIcon />
      </summary>
      <div className='flex items-center justify-start w-full gap-2 ml-4 mt-1 hover:cursor-pointer hover:text-white'>
        <UserIcon />
        <h3 className='text-sm font-medium hover:ml-1 hover:scale-110 hover:text-[#ff823f]'>Nombre Falso</h3>
      </div>
      <div className='flex items-center justify-start w-full gap-2 ml-4 mt-1 hover:cursor-pointer hover:text-white'>
        <UserIcon />
        <h3 className='text-sm font-medium hover:ml-1 hover:scale-110 hover:text-[#ff823f]'>Nombre Falso</h3>
      </div>
      <div className='flex items-center justify-start w-full gap-2 ml-4 mt-1 hover:cursor-pointer hover:text-white'>
        <UserIcon />
        <h3 className='text-sm font-medium hover:ml-1 hover:scale-110 hover:text-[#ff823f]'>Nombre Falso</h3>
      </div>
    </details>
  );
};
export default Notification;
