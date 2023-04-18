'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Dialog } from '@headlessui/react';
import { hideModal } from '@/redux/slices/sliceModals';
import Item from './components/Item';
import { useRef, useState } from 'react';
import SwitchItem from './components/Switch';
import { ModalChangePassword } from '../..';

const items = [
  { title: 'Cambiar contraseña', modal: 'modalChangePassword' },
  { title: 'Información personal', modal: '' },
  { title: 'Privacidad', modal: '' },
];

const ModalSettingProfile = () => {
  const [enabledNotifications, setEnabledNotifications] = useState(false);
  const [enabledPrivateAccount, setEnabledPrivateAccount] = useState(false);
  const { modalSettingProfile } = useAppSelector((state) => state.modalsReducer);
  const buttonRef = useRef(null);
  const dispatch = useAppDispatch();

  const closeModal = () => dispatch(hideModal('modalSettingProfile'));

  return (
    <>
      <Dialog initialFocus={buttonRef} open={modalSettingProfile} onClose={closeModal} className='relative z-50'>
        <div className='fixed inset-0 bg-black/60' aria-hidden='true' />
        <div className='fixed inset-0 flex items-center justify-center p-4'>
          <Dialog.Panel className='w-[360px] h-[430px] bg-white rounded-md'>
            <Dialog.Title className='flex items-center gap-10 p-3'>
              <div className='text-sm text-black cursor-pointer' onClick={closeModal}>
                ✖️
              </div>
              <h2 className='text-xl font-semibold text-black'>Configuración</h2>
            </Dialog.Title>
            <Dialog.Description className='flex flex-col'>
              {items.map((item) => (
                <Item key={item.title} title={item.title} modal={item.modal} />
              ))}
              <div className='flex justify-between items-center w-full h-16 px-4'>
                <h3 className='text-md font-medium'>Notificaciones</h3>
                <SwitchItem enabled={enabledNotifications} setEnabled={setEnabledNotifications} />
              </div>
              <div className='flex justify-between items-center w-full h-16 px-4'>
                <h3 className='text-md font-medium'>Cuenta privada</h3>
                <SwitchItem enabled={enabledPrivateAccount} setEnabled={setEnabledPrivateAccount} />
              </div>
              <div tabIndex={0} className='flex justify-center items-center mb-3'>
                <div ref={buttonRef} className='btn-primary rounded-full py-3 px-14 border-none' onClick={closeModal}>
                  CERRAR CUENTA
                </div>
              </div>
            </Dialog.Description>
          </Dialog.Panel>
        </div>
      </Dialog>
      <ModalChangePassword />
    </>
  );
};
export default ModalSettingProfile;
