import CardContainer from './components/CardContainer';
import { CardRecipeShare } from '../components';

export default async function Home() {
  return (
    <div className='flex flex-col items-center mt-10 p-0 gap-16 h-full'>
      <CardRecipeShare />
      <CardContainer />
    </div>
  );
}
