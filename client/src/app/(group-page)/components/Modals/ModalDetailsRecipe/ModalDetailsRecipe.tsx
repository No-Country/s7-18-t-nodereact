'use client';

import { ArrowLeft } from '@/icons';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { hideModal } from '@/redux/slices/sliceModals';
import Image from 'next/image';
import { Info, Ingredients, Likes } from '.';
import { Dialog } from '@headlessui/react';

const paragraph = `Lorem ipsum dolor sit amet, consectetuer
 adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
Aenean massa. Lorem ipsum dolor sit amet, consectetuer 
adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
`;

const ModalDetailsRecipe = () => {
  const { modalDetailsRecipe } = useAppSelector((state) => state.modalsReducer);
  const dispatch = useAppDispatch();

  const closeModal = () => dispatch(hideModal('modalDetailsRecipe'));
  return (
    <Dialog open={modalDetailsRecipe} onClose={closeModal} className='relative z-50'>
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className='fixed inset-0 bg-black/80' aria-hidden='true' />

      {/* Full-screen container to center the panel */}
      <div className='fixed inset-0 flex items-center justify-center p-4'>
        {/* The actual dialog panel  */}
        <Dialog.Panel className='relative mx-auto w-full rounded bg-white md:grid grid-cols-5 xl:w-8/12 2xl:w-1/2 overflow-y-hidden 2xl:h-[70%]'>
          <div className='absolute top-2 left-2' onClick={closeModal}>
            <ArrowLeft width={25} height={25} color='white' />
          </div>
          <Image
            width={800}
            height={800}
            src='/pizza.png'
            alt='Imagen receta'
            className='w-full h-52 md:h-full md:col-span-3 object-cover object-left-center'
          />
          <div className='flex flex-col w-full md:col-span-2 '>
            <div className='flex justify-between items-center w-full p-4'>
              <div className='flex items-center gap-2 font-semibold'>
                <Image
                  width={32}
                  height={32}
                  src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                  alt='Imagen receta'
                  className='rounded-full  border border-[#ff823f]'
                />
                Nombre Usuario
              </div>
              <span className='text-blue-400 hover:text-blue-900 cursor-pointer'>Seguir</span>
            </div>
            <Info />
            <div className='px-4'>
              <Ingredients
                ingredients={[
                  '½ kg Tomates',
                  '½ kg Tomates',
                  '½ kg Tomates',
                  '½ kg Tomates',
                  '½ kg Tomates',
                  '½ kg Tomates',
                ]}
              />
            </div>
            <div className='flex flex-col py-3'>
              <h2 className='text-lg font-bold mb-2 ml-4'>Preparación</h2>
              <div className='h-32 w-[94%] md:h-72 lg:h-60 xl:h-44 rounded-sm hover:overflow-y-auto overflow-hidden p-3 mx-auto bg-gray-200 shadow-md'>
                <p className='font-sans whitespace-pre-wrap'>{paragraph}</p>
              </div>
            </div>
            <div className='flex flex-col w-[94%] pl-2 rounded-sm mx-auto bg-gray-200 shadow-md'>
              <Likes />
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
export default ModalDetailsRecipe;

/* 

    <Modal
      open={modalDetailsRecipe}
      onClickBackdrop={closeModal}
      className='relative w-full max-w-6xl lg:w-[80%] p-0 pl-[5px] md:pl-0 min-h-fit md:h-[90%] rounded-none'
    >
      <Modal.Body className='flex flex-col md:grid grid-cols-5 gap-2 md:gap-0 w-full h-fit'>
        <div className='absolute top-2 left-2' onClick={closeModal}>
          <ArrowLeft width={25} height={25} />
        </div>
        <Image
          width={800}
          height={800}
          src='/pizza.png'
          alt='Imagen receta'
          className='w-full h-52 md:h-52 md:col-span-3 object-cover object-left-center'
        />
        <div className='flex flex-col w-full md:col-span-2'>
          <div className='flex justify-between items-center w-full p-4'>
            <div className='flex items-center gap-2 font-semibold'>
              <Image
                width={32}
                height={32}
                src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                alt='Imagen receta'
                className='rounded-full  border border-[#ff823f]'
              />
              Nombre Usuario
            </div>
            <span className='text-blue-400 hover:text-blue-900 cursor-pointer'>Seguir</span>
          </div>
          <Info />
          <div className='px-4'>
            <Ingredients
              ingredients={[
                '½ kg Tomates',
                '½ kg Tomates',
                '½ kg Tomates',
                '½ kg Tomates',
                '½ kg Tomates',
                '½ kg Tomates',
              ]}
            />
          </div>
          <div className='flex flex-col py-5'>
            <h2 className='text-lg font-bold mb-2 ml-4'>Preparación</h2>
            <div className='h-44 w-[94%] md:h-72 lg:h-60 xl:h-44 rounded-sm hover:overflow-y-auto overflow-hidden p-3 mx-auto bg-gray-200 shadow-md'>
              <p className='font-sans whitespace-pre-wrap'>{paragraph}</p>
            </div>
          </div>
          <div className='flex flex-col w-[94%] pl-5 pb-3 rounded-sm mx-auto bg-gray-200 shadow-md'>
            <Likes />
          </div>
        </div>
      </Modal.Body>
    </Modal>

*/
