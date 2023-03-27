'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { hideModal, showModal } from '@/redux/slices/sliceModals';

const BurgerButton = () => {
  const { drawerMenu } = useAppSelector((state) => state.modalsReducer);
  const dispatch = useAppDispatch();

  const drawerToggle = () => (drawerMenu ? dispatch(hideModal('drawerMenu')) : dispatch(showModal('drawerMenu')));

  return (
    <div className='flex-none lg:hidden' onClick={drawerToggle}>
      <label className='btn btn-square btn-ghost'>
        <svg fill='none' viewBox='0 0 24 24' className='inline-block w-6 h-6 stroke-current'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
        </svg>
      </label>
    </div>
  );
};
export default BurgerButton;
