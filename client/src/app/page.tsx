import { DrawerMenuLeft, DrawerMenuRight, ModalSearch } from './components';

export default function Home() {
  return (
    <div className='grid grid-cols-2'>
      <ModalSearch />
      <DrawerMenuLeft />
      <DrawerMenuRight />
    </div>
  );
}
