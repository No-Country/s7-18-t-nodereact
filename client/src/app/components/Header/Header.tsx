import Image from 'next/image';
import ButtonSearch from './ButtonSearch';
import { navbar, ulUserMenu } from './classes';
import { InputSearch } from '..';
import BurgerButton from './BurgerButton';

const Header = () => {
  return (
    <div className={navbar}>
      <div>
        <BurgerButton position={'Left'} />
        <div className='flex-0'>
          <a className='btn btn-ghost normal-case text-xl'>Food recipes</a>
        </div>
      </div>
      <InputSearch />

      <div>
        <ButtonSearch />
        <BurgerButton position={'Right'} />
      </div>
    </div>
  );
};
export default Header;
