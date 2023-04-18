'use client';

import { CheckedListIcon } from '@/icons';
import { useRef, useState } from 'react';

interface Props {
  handleChange: (data: any) => void;
  ingredients: string[];
}

const AddIngredients = ({ handleChange, ingredients }: Props) => {
  const [ingredient, setIngredient] = useState<string>('');
  const inputRef = useRef();

  const addNewIngredient = () => {
    handleChange({ ingredients: [...ingredients, ingredient] });
    setIngredient('');
    //@ts-ignore
    inputRef?.current?.focus();
  };

  const deleteIngredient = (ingredient: string) =>
    handleChange({ ingredients: ingredients.filter((el) => el.toLowerCase() !== ingredient.toLowerCase()) });

  return (
    <div className='flex flex-col gap-3'>
      <section className='flex justify-between h-7 w-full mt-3 border-b border-gray-300'>
        <div className='flex items-center w-full gap-2'>
          <CheckedListIcon />
          <input
            //@ts-ignore
            ref={inputRef}
            value={ingredient}
            onChange={(e) => setIngredient(e.currentTarget.value)}
            onKeyDown={(e) => e.key === 'Enter' && addNewIngredient()}
            type='text'
            placeholder='Ingredientes'
            className='w-full
                       active: bg-transparent
                       active: outline-none'
          />
        </div>
        <p
          className='flex justify-center items-center text-lg text-gray-400 py-1 px-2 mb-1 rounded-full hover:bg-orange-100'
          onClick={addNewIngredient}
        >
          +
        </p>
      </section>
      <ul
        className={`w-full h-[${ingredients?.length * 40}px] 
                    max-h-[80px] lg:max-h-[120px]
                    xl:max-h-[120px]
                    overflow-auto`}
      >
        {ingredients?.map((ingredient) => (
          <li key={ingredient} className='text-xs lg:text-base flex justify-between hover:bg-orange-100 w-full p-2'>
            <div>
              <span className='text-sm lg:text-base text-orange-500 mr-2'>✓</span>
              {ingredient}
            </div>
            <span
              className='text-xs lg:text-base text-red-500 cursor-pointer'
              onClick={() => deleteIngredient(ingredient)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AddIngredients;
