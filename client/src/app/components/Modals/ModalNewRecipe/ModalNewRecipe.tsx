'use client';

import { ArrowLeft } from '@/icons';
import { useAppSelector } from '@/redux/hooks';
import { hideModal } from '@/redux/slices/sliceModals';
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-daisyui';
import { SelectNationality } from '../..';
import { useAppDispatch } from './../../../../redux/hooks';

const ModalNewRecipe = () => {
  const [countries, setCountries] = useState([]);
  const { modalNewRecipe } = useAppSelector((state) => state.modalsReducer);
  const dispatch = useAppDispatch();

  const getCountries = async () => {
    try {
      const res = await fetch('https://restcountries.com/v3.1/all');
      if (!res.ok) {
        throw new Error('Error al obtener datos');
      }

      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries().then((dataCountries) => {
      setCountries(
        dataCountries?.map((country: any) => ({
          name: country.name.common,
          code: country.cca2,
          abbreviation: country.cioc ?? country.cca3,
        }))
      );
    });
  }, []);

  const closeModal = () => dispatch(hideModal('modalNewRecipe'));

  return (
    <Modal
      open={modalNewRecipe}
      onClickBackdrop={closeModal}
      className='w-full lg:w-11/12 max-w-5xl h-full lg:h-4/5 p-0 overflow-hidden'
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
      <Modal.Body className='flex flex-col h-[calc(100%-33px)] w-full'>
        <div className='w-full h-2/5 lg:w-3/5 bg-cover bg-no-repeat bg-left-top bg-[url("https://lacomidatipica.com/wp-content/uploads/2019/02/tacos1.jpg")]'></div>
        <div className='flex flex-col w-full lg:w-2/5 h-full'>
          <div className='flex w-full p-2'>
            <SelectNationality countries={countries} />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default ModalNewRecipe;
