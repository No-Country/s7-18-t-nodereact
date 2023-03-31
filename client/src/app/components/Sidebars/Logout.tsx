import { LogoutIcon } from '@/icons';

const Logout = () => {
  return (
    <div className='absolute bottom-1 left-0 h-14 w-full flex justify-center items-center gap-2 border-t border-gray-300'>
      <LogoutIcon />
      <h3 className='text-xl font-medium'>Cerrar sesión</h3>
    </div>
  );
};
export default Logout;
