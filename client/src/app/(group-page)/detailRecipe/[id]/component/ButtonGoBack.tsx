import { ArrowLeft } from '@/icons';
import Link from 'next/link';

const ButtonGoBack = () => {
  return (
    <Link href='/home' className='m-1 xl:mt-4 2xl:m-1 z-10'>
      <ArrowLeft width={32} height={32} />
    </Link>
  );
};
export default ButtonGoBack;
