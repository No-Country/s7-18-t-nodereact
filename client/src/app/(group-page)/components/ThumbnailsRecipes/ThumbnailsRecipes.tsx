'use client';

import { CardThumbnailsRecipe } from '..';
import { IRecipe } from '../Modals/ModalNewRecipe/ModalNewRecipe';

interface Props {
  recipes: IRecipe[];
}
const ThumbnailsRecipes = ({ recipes }: Props) => {
  return (
    <div className='flex flex-wrap justify-center gap-3 p-1 w-full'>
      {recipes && recipes?.map((el) => <CardThumbnailsRecipe key={el!._id} recipe={el} />)}
    </div>
  );
};
export default ThumbnailsRecipes;
