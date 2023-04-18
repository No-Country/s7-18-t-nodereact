'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Dialog } from '@headlessui/react';
import { hideModal } from '@/redux/slices/sliceModals';
import { Eye, EyeSlashIcon, OpenLock } from '@/icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { schema } from './schema';
import axiosApi from '@/app/libs/axios';
import { Toaster, toast } from 'sonner';

interface IForm {
  password: string;
  newPassword: string;
  repeatPassword: string;
}

const initialForm = {
  password: '',
  newPassword: '',
  repeatPassword: '',
};

const ModalChangePassword = () => {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const modalChangePassword = useAppSelector((state) => state.modalsReducer.modalChangePassword);
  const token = useAppSelector((state) => state.userReducer.token);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(schema),
  });

  const closeModal = () => dispatch(hideModal('modalChangePassword'));

  const onSubmit = ({ newPassword }: IForm) => {
    try {
      toast.promise(
        axiosApi.put(`/users/forgotten-password/${token}`, {
          password: newPassword,
        }),
        {
          loading: 'Actualizando contraseña..',
          success: 'Contraseña actualizada',
          error: 'Hubo un error al actualizar la contraseña',
        }
      );
      closeModal();
    } catch (error) {
      toast.error('Hubo un error al actualizar la contraseña');
    }
  };

  return (
    <>
      <Dialog open={modalChangePassword} onClose={closeModal} className='relative z-[60]'>
        <div className='fixed inset-0 flex items-center justify-center p-4'>
          <Dialog.Panel className='relative w-[380px] h-[440px] bg-white rounded-md'>
            <Dialog.Title className='flex items-center gap-10 p-3'>
              <div className='text-sm text-black cursor-pointer' onClick={closeModal}>
                ✖️
              </div>
              <h2 className='text-xl font-semibold text-black'>Configuración</h2>
            </Dialog.Title>
            <Dialog.Description className='flex flex-col'>
              <div className='flex justify-between items-center p-4'>
                <h2 className='text-lg text-orange-400'>Cambiar contraseña</h2>
                <div className='cursor-pointer' onClick={() => setVisiblePassword(!visiblePassword)}>
                  {visiblePassword ? <EyeSlashIcon /> : <Eye />}
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className='w-full px-4 mt-5 mb-10 flex flex-col gap-7'>
                <div className='flex flex-col py-0'>
                  <div className='flex justify-between border-b-2'>
                    <input
                      {...register('password')}
                      autoComplete='on'
                      type={`${visiblePassword ? 'text' : 'password'}`}
                      className='appearance-none bg-transparent border-none w-full text-lg text-gray-400 mr-2 px-2 leading-tight focus:outline-none py-0'
                      placeholder='Contraseña actual'
                      aria-label='Contraseña actual'
                    />
                    <OpenLock />
                  </div>
                  {errors.password && <p className='text-xs text-red-500 mt-1'>{errors.password?.message}</p>}
                </div>
                <div className='flex flex-col py-0'>
                  <div className='flex justify-between border-b-2'>
                    <input
                      {...register('newPassword')}
                      autoComplete='on'
                      type={`${visiblePassword ? 'text' : 'password'}`}
                      className='appearance-none bg-transparent border-none w-full text-lg text-gray-400 mr-2 px-2 leading-tight focus:outline-none py-0'
                      placeholder='Contraseña nueva'
                      aria-label='Contraseña nueva'
                    />
                    <OpenLock />
                  </div>
                  {errors.newPassword && <p className='text-xs text-red-500 mt-1'>{errors.newPassword?.message}</p>}
                </div>
                <div className='flex flex-col py-0'>
                  <div className='flex justify-between border-b-2'>
                    <input
                      {...register('repeatPassword')}
                      autoComplete='on'
                      type={`${visiblePassword ? 'text' : 'password'}`}
                      className='appearance-none bg-transparent border-none w-full text-lg text-gray-400 mr-2 px-2 leading-tight focus:outline-none py-0'
                      placeholder='Repetir Contraseña nueva'
                      aria-label='Repetir Contraseña nueva'
                    />
                    <OpenLock />
                  </div>
                  {errors.repeatPassword && (
                    <p className='text-xs text-red-500 mt-1'>{errors.repeatPassword?.message}</p>
                  )}
                </div>
                <div className='absolute left-0 bottom-4 flex justify-around items-center w-full'>
                  <div className='btn-primary-outline rounded-full py-3 px-10' onClick={closeModal}>
                    VOLVER
                  </div>
                  <button className='btn-primary rounded-full py-3 px-8 border-none'>GUARDAR</button>
                </div>
              </form>
            </Dialog.Description>
          </Dialog.Panel>
        </div>
      </Dialog>
      <Toaster position='top-center' richColors />
    </>
  );
};
export default ModalChangePassword;
