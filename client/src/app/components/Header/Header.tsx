import Image from 'next/image';
import ButtonSearch from './ButtonSearch';
import { navbar, ulUserMenu } from './classes';
import { InputSearch } from '..';

const Header = () => {
  return (
    <div className={navbar}>
      {/* Burger menu */}
      <div>
        <div className='flex-none lg:hidden'>
          <label htmlFor='my-drawer-2' className='btn btn-square btn-ghost'>
            <svg fill='none' viewBox='0 0 24 24' className='inline-block w-6 h-6 stroke-current'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </label>
        </div>
        <div className='flex-0'>
          <a className='btn btn-ghost normal-case text-xl'>Food recipes</a>
        </div>
      </div>
      <InputSearch />

      <div>
        <ButtonSearch />

        <div className='flex-none gap-2'>
          <div className='dropdown dropdown-end'>
            <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
              <div className='w-10 rounded-full'>
                <Image
                  width={40}
                  height={40}
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFGiJ_tIEbFuvt7J7d17ldDOetn-PZteEIDQ&usqp=CAU'
                  alt='image user'
                />
              </div>
            </label>
            <ul tabIndex={0} className={ulUserMenu}>
              <li>
                <a>Perfil</a>
              </li>
              <li>
                <a>Configuración</a>
              </li>
              <li>
                <a>Cerrar sesión</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
