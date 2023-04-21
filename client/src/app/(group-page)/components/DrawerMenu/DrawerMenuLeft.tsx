'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { hideModal } from '@/redux/slices/sliceModals';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { SidebarUser } from '..';
import BtnClose from './BtnClose';

const DrawerMenuLeft = () => {
  const { drawerMenuLeft } = useAppSelector((state) => state.modalsReducer);
  const dispatch = useAppDispatch();
  return (
    <Drawer
      style={{ backgroundColor: 'rgb(231 ,229, 228)' }}
      size={350}
      open={drawerMenuLeft}
      onClose={() => dispatch(hideModal('drawerMenuLeft'))}
      direction='left'
    >
      <BtnClose pos='left' />
      <SidebarUser />
    </Drawer>
  );
};
export default DrawerMenuLeft;
