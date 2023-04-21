import { CardProfile, CardThumbnailsRecipe, CardStats } from '../components'; // common components
import { BodyCardUsersProfile } from './components';

const recipes = new Array(20).fill('');

export default function page() {
  return (
    <div className='flex flex-col items-center my-10 gap-6 overflow-x-hidden w-full md:w-[90%] xl:w-3/4 mx-auto'>
      <CardProfile>
        <BodyCardUsersProfile />
      </CardProfile>
      <CardStats />
      <div className='flex flex-wrap justify-center gap-3 p-1 w-full'>
        {recipes.map((el, idx) => (
          <CardThumbnailsRecipe key={idx} recipe={el} />
        ))}
      </div>
    </div>
  );
}
