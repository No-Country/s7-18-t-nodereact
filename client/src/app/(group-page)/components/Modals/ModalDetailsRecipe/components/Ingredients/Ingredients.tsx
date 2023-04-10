import { CheckedListIcon } from '@/icons';

interface Props {
  ingredients: string[];
}

const Ingredients = ({ ingredients }: Props) => {
  return (
    <div className='flex flex-col gap-3'>
      <section className='flex justify-between h-7 w-full mt-3 border-b border-gray-300'>
        <div className='flex items-center w-full gap-2 text-sm text-gray-400'>
          <CheckedListIcon />
          Ingredientes
        </div>
      </section>
      <ul
        className={`w-full h-[${ingredients?.length * 20}px] 
                    max-h-[80px]
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
export default Ingredients;
