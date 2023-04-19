'use client';

import { ArrowLeft } from '@/icons';
import { useAppSelector } from '@/redux/hooks';
import { hideModal } from '@/redux/slices/sliceModals';
import { Button, Modal } from 'react-daisyui';
import { useAppDispatch } from '@/redux/hooks';
import { useRef, useState } from 'react';
import axios from 'axios';
import axiosApi from '@/app/libs/axios';
import { Toaster, toast } from 'sonner';

import {
  SelectNationality,
  SelectDifficulty,
  SelectCategory,
  QuantityPortions,
  AddIngredients,
  Preparation,
  DropZone,
  Description,
} from '.';

export interface IOption {
  label: string;
  value: string;
}

export interface IRecipe {
  _id: string;
  author: string;
  title: string;
  description: string;
  preparation: string;
  category: string[];
  difficulty: string;
  ingredients: string[];
  portions: string;
  country: string;
  images?: string[];
  likes?: string[];
}

const initialRecipe: IRecipe = {
  _id: '',
  author: '',
  title: '',
  preparation: '',
  description: '',
  category: [],
  difficulty: '',
  ingredients: [],
  portions: '1',
  country: '',
  //images: [],
};

const ModalNewRecipe = () => {
  const [recipe, setRecipe] = useState(initialRecipe);
  const [files, setFiles] = useState<File[]>([]);
  const { modalNewRecipe } = useAppSelector((state) => state.modalsReducer);
  const { user } = useAppSelector((state) => state.userReducer);
  const token = useAppSelector((state) => state.userReducer.token);
  const imagesRef = useRef<string[]>([]);

  const dispatch = useAppDispatch();

  const closeModal = () => dispatch(hideModal('modalNewRecipe'));

  const uploadingImagesToCloudinary = async () => {
    const uploaders = files.map((file: File) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('tags', 'codeinfuse,medium,gist');
      formData.append('upload_preset', 'appetit');
      formData.append('api_key', '737717731758567');
      return axios
        .post('https://api.cloudinary.com/v1_1/dviha8xhw/image/upload', formData, {
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
        })
        .then(({ data }) => imagesRef.current.push(data.secure_url));
    });
    return await axios.all(uploaders);
    //setRecipe((prev) => ({ ...prev, images: [...prev.images, data.secure_url] }))
  };

  const handleChange = (data: any) =>
    setRecipe((prev) => ({ ...prev, [Object.keys(data)[0]]: Object.values(data)[0] }));

  const saveRecipe = async () => {
    const { preparation, ...restRecipe } = recipe;
    try {
      await uploadingImagesToCloudinary();
      console.log(imagesRef.current);

      const res = await axiosApi.post(
        `/posts`,
        { id: user._id, preparation: preparation.split('\n'), ...restRecipe, images: [...imagesRef.current] },
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
      console.log({ res });

      toast.success('Receta creada');
      closeModal();
    } catch (error) {
      toast.error('Hubo un error al crear la receta');
    }
  };

  return (
    <>
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
              <p className='text-xs sm:text-sm mr-2 font-light text-blue-300 cursor-pointer' onClick={saveRecipe}>
                Compartir
              </p>
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
                     bg-[url("/dropzone.png")] bg-base-200'
          >
            <DropZone files={files} setFiles={setFiles} />
          </div>
          <div className='flex flex-col w-full lg:w-2/5 h-3/4 lg:h-full gap-3 px-3'>
            <div className='form-control w-full'>
              <label>
                <span className='text-sm font-semibold'>Título de Receta</span>
              </label>
              <input
                type='text'
                value={recipe.title}
                placeholder='Ingresar título de receta'
                onChange={(e) => handleChange({ title: e.currentTarget.value })}
                className='input input-bordered 
                       h-10 w-full 
                       rounded-md bg-zinc-100
                       border-gray-300'
              />
            </div>
            <SelectNationality handleChange={handleChange} />
            <SelectDifficulty handleChange={handleChange} />
            <SelectCategory handleChange={handleChange} />
            <QuantityPortions numberServings={+recipe.portions} setNumberServings={handleChange} />
            <AddIngredients ingredients={recipe.ingredients} handleChange={handleChange} />
            <Description value={recipe.description} handleChange={handleChange} />
            <Preparation value={recipe.preparation} handleChange={handleChange} />
          </div>
        </Modal.Body>
      </Modal>
      <Toaster position='top-center' expand visibleToasts={4} />
    </>
  );
};
export default ModalNewRecipe;
