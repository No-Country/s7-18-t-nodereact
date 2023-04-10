'use client';

import { AddIcon } from '@/icons';
import { useAppDispatch } from '@/redux/hooks';
import { showModal } from '@/redux/slices/sliceModals';

const ButtonAddRecipe = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      className='flex justify-center items-center rounded-md p-2 border shadow-md active:shadow-none'
      onClick={() => dispatch(showModal('modalNewRecipe'))}
    >
      <AddIcon width={35} height={35} />
    </button>
  );
};
export default ButtonAddRecipe;
