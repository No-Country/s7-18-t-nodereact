import { ButtonAddRecipe, CardProfile, CardThumbnailsRecipe, CardStats } from '../components'; // common components
import { BodyCardProfile } from './components'; //profile components

const recipes = new Array(20).fill('');

export default function page() {
  return (
    <div
      className='flex flex-col items-center my-10 gap-6 
         overflow-x-hidden w-full md:w-[90%] xl:w-5/6 2xl:w-3/4 mx-auto'
    >
      <CardProfile>
        <BodyCardProfile />
      </CardProfile>
      <CardStats />
      <div className='flex gap-3 self-start items-center w-full h-20 pl-1'>
        <ButtonAddRecipe />
        <p className=''>Agregar Receta</p>
      </div>
      <div className='flex flex-wrap justify-center gap-3 p-1 w-full'>
        {recipes.map((el, idx) => (
          <CardThumbnailsRecipe key={idx} />
        ))}
      </div>
    </div>
  );
}