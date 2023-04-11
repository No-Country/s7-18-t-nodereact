'use client';

import { redirect } from 'next/navigation';

const index = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 640) redirect('/movil');
    else redirect('/auth/signIn');
  } else redirect('movil');
};

export default index;
