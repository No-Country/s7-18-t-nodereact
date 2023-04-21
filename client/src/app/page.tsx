'use client';

import { redirect } from 'next/navigation';

const index = () => {
  if (typeof document !== 'undefined') {
    if (document.documentElement.clientWidth < 640) redirect('/movil');
    else redirect('/auth/signIn');
  } else redirect('movil');
};

export default index;
