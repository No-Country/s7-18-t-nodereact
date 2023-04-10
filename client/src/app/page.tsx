import { redirect } from 'next/navigation';

const index = () => {
  redirect('/auth/signIn');
};

export default index;
