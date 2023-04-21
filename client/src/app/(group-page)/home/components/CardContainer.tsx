'use client';

import { useEffect, useState } from 'react';
import { CardRecipe } from '../../components';
import { IRecipe } from '../../components/Modals/ModalNewRecipe/ModalNewRecipe';
import axiosApi from '@/app/libs/axios';

const getRecipes = async () => {
  try {
    const { data } = await axiosApi.get('/posts/posts/ordered');
    return data;
  } catch (error) {
    console.log('Error al obtener los posts');
  }
};

const CardContainer = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    getRecipes().then((data) => setRecipes(data));
  }, []);

  return (
    <div className='w-full flex justify-center flex-wrap gap-2'>
      {recipes?.length ? recipes.map((recipe: IRecipe) => <CardRecipe key={recipe._id} recipe={recipe} />) : null}
    </div>
  );
};
export default CardContainer;
