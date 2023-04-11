'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { hideModal } from '@/redux/slices/sliceModals';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

const DrawerMenuRight = (props: any) => {
  const { drawerMenuRight } = useAppSelector((state) => state.modalsReducer);
  const dispatch = useAppDispatch();
  return (
    <Drawer size={350} open={drawerMenuRight} onClose={() => dispatch(hideModal('drawerMenuRight'))} direction='right'>
      <ul className='menu w-full text-base-content p-0'>
        <li>
          <a>Sidebar Item 1</a>
        </li>
        <li>
          <a>Sidebar Item 2</a>
        </li>
      </ul>
    </Drawer>
  );
};
export default DrawerMenuRight;
