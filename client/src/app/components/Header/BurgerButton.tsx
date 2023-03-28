'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { showModal } from '@/redux/slices/sliceModals';

interface props {
  position: string;
}
const BurgerButton = ({ position }: props) => {
  const dispatch = useAppDispatch();

  return (
    <div className='flex-none lg:hidden' onClick={() => dispatch(showModal(`drawerMenu${position}`))}>
      <label className='btn btn-square btn-ghost'>
        <svg fill='none' viewBox='0 0 24 24' className='inline-block w-6 h-6 stroke-current'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
        </svg>
      </label>
    </div>
  );
};
export default BurgerButton;
