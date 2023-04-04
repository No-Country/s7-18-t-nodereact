'use client';

import { CheckedListIcon } from '@/icons';
import { useRef, useState } from 'react';

const AddIngredients = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [ingredient, setIngredient] = useState<string>('');
  const inputRef = useRef();

  const addNewIngredients = () => {
    setIngredients([...ingredients, ingredient]);
    setIngredient('');
    //@ts-ignore
    inputRef?.current?.focus();
  };

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
            onKeyDown={(e) => e.key === 'Enter' && addNewIngredients()}
            type='text'
            placeholder='Ingredientes'
            className='w-full
                       active: bg-transparent
                       active: outline-none'
          />
        </div>
        <p
          className='flex justify-center items-center text-lg text-gray-400 py-1 px-2 mb-1 rounded-full hover:bg-orange-100'
          onClick={addNewIngredients}
        >
          +
        </p>
      </section>
      <ul
        className={`w-full h-[${ingredients?.length * 20}px] 
                    max-h-[60px] lg:max-h-[100px]
                    xl:max-h-[120px]
                    overflow-auto`}
      >
        {ingredients?.map((ingredient, index) => (
          <li key={index} className='text-xs lg:text-base'>
            <span className='text-sm lg:text-base text-green-700 mr-2'>✓</span>
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AddIngredients;
