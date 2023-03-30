'use client';

import { useAppDispatch } from '@/redux/hooks';
import { showModal } from '@/redux/slices/sliceModals';

const ButtonSearch = () => {
  const dispatch = useAppDispatch();
  return (
    <span className='buttonSearch' onClick={() => dispatch(showModal('modalSearch'))}>
      <svg className='w-8 h-8 cursor-pointer' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
        />
      </svg>
    </span>
  );
};
export default ButtonSearch;
