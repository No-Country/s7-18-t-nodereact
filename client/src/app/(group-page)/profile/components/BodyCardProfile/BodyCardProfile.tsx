'use client';

import { Settings } from '@/icons';
import { showModal } from '@/redux/slices/sliceModals';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ModalSettingProfile } from '@/app/(group-page)/components';

const BodyCardProfile = () => {
  const { user } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  return (
    <>
      <h2 className='text-md mt-1 xl:text-2xl font-semibold'>{user?.name}</h2>
      <div className='flex'>
        <button className='btn-primary px-6 py-1 mx-3'>Editar</button>
        <div className='cursor-pointer ml-3' onClick={() => dispatch(showModal('modalSettingProfile'))}>
          <Settings width={30} height={30} />
        </div>
      </div>
      <ModalSettingProfile />
    </>
  );
};
export default BodyCardProfile;
