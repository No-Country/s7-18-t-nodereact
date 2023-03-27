import { DrawerMenu, ModalSearch } from './components';

export default function Home() {
  return (
    <div className='grid grid-cols-2'>
      {/* <DrawerMenu /> */}
      <ModalSearch />
      <DrawerMenu />
    </div>
  );
}
