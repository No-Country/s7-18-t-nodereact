import { AddIcon } from '@/icons';

const ButtonAddRecipe = () => {
  return (
    <button className='flex justify-center items-center rounded-md p-2 border shadow-md active:shadow-none'>
      <AddIcon width={35} height={35} />
    </button>
  );
};
export default ButtonAddRecipe;
