import axios from 'axios';
import { InfoRecipe, Ingredients, Preparation, TitleRecipe } from '@/app/(group-page)/components';
import { ButtonArchived, ButtonGoBack, SliceImages } from './component';
import Description from './component/Description';
import BoxSocial from '../../components/CardRecipe/BoxSocial';

const getData = async (id: string) => {
  try {
    const { data } = await axios.get(`${process.env.SERVER_URL_BASE}/posts/${id}`);
    return data;
  } catch (error) {
    console.log('Error al obtener el post');
  }
};

const page = async ({ params }: any) => {
  const recipe = await getData(params.id);

  return (
    <>
      <section className='flex flex-col justify-between items-center h-[400px] w-full  mt-5'>
        <div className='relative flex flex-col justify-between h-[400px] w-[96%] lg:w-[80%] xl:w-3/5'>
          <div className='absolute top-0 left-0 w-full'>
            <SliceImages images={recipe.images} />
          </div>
          <div className='flex justify-between w-full h-6 lg:pt-3 2xl:px-6'>
            <ButtonGoBack />
            <ButtonArchived />
          </div>
          <div className='relative top-10 self-end'>
            <BoxSocial likes={recipe.likes} />
          </div>
          <TitleRecipe title={recipe.title} country={recipe.country} />
        </div>
      </section>
      <section className='flex flex-col justify-between items-center w-full'>
        <div className='relative flex flex-col justify-between w-w-[96%] lg:w-[80%] xl:w-3/5'>
          <InfoRecipe difficulty={recipe.difficulty} category={recipe.category} portions={recipe.portions} />
          <Description description={recipe.description} />
          <Ingredients ingredients={recipe.ingredients} />
          <Preparation preparation={recipe.preparation} />
        </div>
      </section>
    </>
  );
};
export default page;
