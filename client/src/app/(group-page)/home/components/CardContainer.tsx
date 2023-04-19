'use client';

import { CardRecipe } from '../../components';
import { IRecipe } from '../../components/Modals/ModalNewRecipe/ModalNewRecipe';

interface Props {
  recipes: IRecipe[];
}
const CardContainer = ({ recipes }: Props) => {
  console.log({ recipes });

  return (
    <div className='w-full flex justify-center flex-wrap gap-2'>
      {recipes?.length ? recipes.map((recipe) => <CardRecipe key={recipe._id} recipe={recipe} />) : null}
    </div>
  );
};
export default CardContainer;
