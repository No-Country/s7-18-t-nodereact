'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { hideModal } from '@/redux/slices/sliceModals';
import { Button, Modal } from 'react-daisyui';
import { InputSearchMobile } from '../..';

const ModalSearch = () => {
  const { modalSearch } = useAppSelector((state) => state.modalsReducer);
  const dispatch = useAppDispatch();
  return (
    <Modal open={modalSearch} onClickBackdrop={() => dispatch(hideModal('modalSearch'))}>
      <Modal.Body>
        <InputSearchMobile />
      </Modal.Body>
    </Modal>
  );
};
export default ModalSearch;
