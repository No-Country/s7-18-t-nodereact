import { CardRecipe, CardRecipeShare } from './components';
import Movil from './components/Inicio/Movil'

export default async function Home() {
  return (
    // <main>
    //   <Movil/>
    // </main>
    <div className='flex flex-col mt-10 p-0 sm:w-[430px] mx-auto gap-16'>
      <CardRecipeShare />
      <CardRecipe />
    </div>
  );
}
