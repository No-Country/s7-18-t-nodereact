import axios from 'axios';
import CardContainer from './components/CardContainer';
import { CardRecipeShare } from '../components';

const getRecipes = async () => {
  try {
    const { data } = await axios.get(`${process.env.SERVER_URL_BASE}/posts/posts/ordered`);
    return data;
  } catch (error) {
    console.log('Error al obtener los posts');
  }
};

export default async function Home() {
  const recipes = await getRecipes();
  return (
    <div className='flex flex-col items-center mt-10 p-0 gap-16 h-full'>
      <CardRecipeShare />
      <CardContainer recipes={recipes} />
    </div>
  );
}
