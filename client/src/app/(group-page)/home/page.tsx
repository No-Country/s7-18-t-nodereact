import { CardRecipe, CardRecipeShare } from '../components';

export default async function Home() {
  return (
    <div className='flex flex-col mt-10 p-0 sm:w-[430px] mx-auto gap-16 h-full'>
      <CardRecipeShare />
      <CardRecipe />
    </div>
  );
}
