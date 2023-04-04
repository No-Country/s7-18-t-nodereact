'use client';

import { ArrowLeft } from '@/icons';
import { useAppSelector } from '@/redux/hooks';
import { hideModal } from '@/redux/slices/sliceModals';
import { Button, Modal } from 'react-daisyui';
import { useAppDispatch } from './../../../../redux/hooks';
import { SelectNationality, SelectDifficulty, SelectCategory, QuantityPortions, AddIngredients, Preparation } from '.';

const ModalNewRecipe = () => {
  const { modalNewRecipe } = useAppSelector((state) => state.modalsReducer);
  const dispatch = useAppDispatch();

  const closeModal = () => dispatch(hideModal('modalNewRecipe'));

  return (
    <Modal
      open={modalNewRecipe}
      onClickBackdrop={closeModal}
      className='w-11/12 max-w-5xl h-full lg:h-11/12 p-0 overflow-hidden'
    >
      <Modal.Header className='font-semibold m-0'>
        <div className='flex justify-between items-center mx-1 border-b'>
          <ArrowLeft width={25} height={25} />
          <p className='text-xs'>Crear una nueva Receta</p>
          <div className='flex items-center'>
            <p className='text-xs sm:text-sm mr-2 font-light text-blue-300'>Compartir</p>
            <Button size='sm' shape='circle' color='ghost' onClick={closeModal}>
              ✕
            </Button>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body
        className='flex flex-col lg:flex-row 
                   h-[calc(100%-33px)] w-full
                   md:w-5/6 lg:w-full
                   mx-auto gap-3 lg:gap-0
                   lg:p-0
                   overflow-y-auto'
      >
        <div
          className='w-full h-1/4 lg:h-full lg:w-3/5 bg-cover 
                     bg-no-repeat bg-top
                     bg-[url("https://lacomidatipica.com/wp-content/uploads/2019/02/tacos1.jpg")]'
        ></div>
        <div className='flex flex-col w-full lg:w-2/5 h-3/4 lg:h-full gap-3 px-3'>
          <div className='form-control w-full'>
            <label>
              <span className='text-sm font-semibold'>Título de Receta</span>
            </label>
            <input
              type='text'
              placeholder='Ingresar título de receta'
              className='input input-bordered 
                       h-10 w-full 
                       rounded-md bg-zinc-100
                       border-gray-300'
            />
          </div>
          <SelectNationality />
          <SelectDifficulty />
          <SelectCategory />
          <QuantityPortions />
          <AddIngredients />
          <Preparation />
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default ModalNewRecipe;
