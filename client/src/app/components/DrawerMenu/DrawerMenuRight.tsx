'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { hideModal } from '@/redux/slices/sliceModals';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { SidebarFollow } from '..';
import BtnClose from './BtnClose';

const DrawerMenuRight = (props: any) => {
  const { drawerMenuRight } = useAppSelector((state) => state.modalsReducer);
  const dispatch = useAppDispatch();
  return (
    <Drawer size={350} open={drawerMenuRight} onClose={() => dispatch(hideModal('drawerMenuRight'))} direction='right'>
      <SidebarFollow />
      <BtnClose pos='right' />
    </Drawer>
  );
};
export default DrawerMenuRight;
