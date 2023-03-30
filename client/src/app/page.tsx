import Image from 'next/image';
import {
  DrawerMenuLeft,
  DrawerMenuRight,
  InfoRecipe,
  Ingredients,
  ModalSearch,
  Preparation,
  TitleRecipe,
} from './components';
import { url } from './url';

export default function Home() {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-5 h-fit py-5'>
        <div className='relative'>
          <Image width='1000' height='1000' src={url} alt='Taco' />
          <TitleRecipe />
        </div>
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
