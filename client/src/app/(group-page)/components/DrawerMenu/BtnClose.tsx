'use client';

import { useAppDispatch } from '@/redux/hooks';
import { hideModal } from '@/redux/slices/sliceModals';

interface Props {
  pos: string;
}

const BtnClose = ({ pos }: Props) => {
  const dispatch = useAppDispatch();
  const dir = pos === 'right' ? 'left-2' : 'right-2';
  const drawer = pos === 'right' ? 'drawerMenuRight' : 'drawerMenuLeft';
  return (
    <button
      className={`btn btn-square btn-ghost absolute top-1 ${dir} z-50 text-white hover:text-red-500`}
      onClick={() => dispatch(hideModal(drawer))}
    >
      <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
      </svg>
    </button>
  );
};
export default BtnClose;
