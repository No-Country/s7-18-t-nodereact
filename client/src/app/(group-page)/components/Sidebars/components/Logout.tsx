'use client';
import { signOut } from 'next-auth/react';

import { LogoutIcon } from '@/icons';
import { useAppDispatch } from '@/redux/hooks';
import { useRouter } from 'next/navigation';

const Logout = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <div
      onClick={() => signOut()}
      className='absolute bottom-1 left-0 h-14 w-full flex justify-center items-center gap-2 border-y-2 cursor-pointer border-gray-300 hover:border-[#ff823f]'
    >
      <LogoutIcon />
      <h3 className='text-xl font-medium hover:ml-4 hover:scale-125 hover:text-[#ff823f]'>Cerrar sesión</h3>
    </div>
  );
};
export default Logout;
