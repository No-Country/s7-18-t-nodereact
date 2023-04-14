'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className='flex justify-center gap-2 cursor-pointer' onClick={() => router.push('/profile')}>
      <div className='avatar'>
        <div className='w-[80px] rounded-full border border-[#FF8C00]'>
          <Image width='100' height='100' alt='Profile' src={session?.user?.image || ''} />
        </div>
      </div>
      <div className='flex flex-col justify-around'>
        <h2 className='text-2xl text-white'>{session?.user?.name}</h2>
        <p className='text-xs text-white'>Cambiar cuenta</p>
      </div>
    </div>
  );
};
export default Profile;
