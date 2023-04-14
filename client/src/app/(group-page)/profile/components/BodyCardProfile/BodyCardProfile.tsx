'use client';

import { useSession } from 'next-auth/react';
import { Settings } from '@/icons';

const BodyCardProfile = () => {
  const { data: session } = useSession();

  return (
    <>
      <h2 className='text-md mt-1 xl:text-2xl font-semibold'>{session?.user?.name}</h2>
      <button className='btn-personalized-outline mx-3'>Editar</button>
      <Settings width={30} height={30} />
    </>
  );
};
export default BodyCardProfile;
