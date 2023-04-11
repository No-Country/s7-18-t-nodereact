'use client';

import { redirect } from 'next/navigation';

const index = () => {
  console.log(document.body.scrollWidth);

  if (typeof document !== 'undefined') {
    if (document.documentElement.clientWidth < 640) redirect('/movil');
    else redirect('/auth/signIn');
  } else redirect('movil');
};

export default index;
