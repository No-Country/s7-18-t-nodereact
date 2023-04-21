import ButtonSearch from './ButtonSearch';
import { InputSearch } from '..';
import BurgerButton from './BurgerButton';
import { HeartIcon } from '@/icons';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='flex justify-between w-full navbar border-b-2 p-0 bg-gradient-to-b from-[#ff823f] to-[#ffd700]'>
      <div className='ml-1 sm:ml-10'>
        <BurgerButton position={'Left'} />
        <div className='flex-0'>
          <Link href={'/home'} className='cursor-pointer'>
            <Image width='200' height='60' src='/img/logo_appetit_brand.png' alt='logo' />
          </Link>
        </div>
      </div>
      <InputSearch />
      <div className='mr-3 sm:mr-10 gap-2'>
        <ButtonSearch />
        {/*  <HeartIcon /> */}
      </div>
    </div>
  );
};
export default Header;
