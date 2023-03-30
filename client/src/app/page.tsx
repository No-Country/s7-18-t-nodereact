import Image from 'next/image';
import { DrawerMenuLeft, DrawerMenuRight, InfoRecipe, Ingredients, ModalSearch, Preparation } from './components';
import { url } from './url';

export default function Home() {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-5 h-fit py-5'>
        <Image width='1000' height='600' src={url} alt='Taco' />
        <InfoRecipe />
        <Ingredients />
        <Preparation />
      </div>
      <ModalSearch />
      <DrawerMenuLeft />
      <DrawerMenuRight />
    </>
  );
}
