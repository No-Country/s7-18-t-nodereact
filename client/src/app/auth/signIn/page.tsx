'use client';

import Button from '@/app/components/elements/Button';
import { Eye, EyeSlashIcon } from '@/icons';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import { Divider } from 'react-daisyui';

interface IForm {
  name: string;
  age: string;
  country: string;
  province: string;
  email: string;
  password: string;
}

const initialForm = {
  email: '',
  password: '',
  name: '',
  age: '',
  country: '',
  province: '',
};

const LoginPage = () => {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [data, setData] = useState<IForm>(initialForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setData({
      ...data,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen px-7 py-4 bg-white mx-auto md:grid grid-cols-2'>
      <h2 className='text-4xl mb-10 w-full text-center'>Logo</h2>
      <div className='flex flex-col justify-center items-center gap-2 w-full sm:w-3/4 md:w-full lg:w-3/4 xl:w-3/5'>
        <h4 className='text-xl md:text-3xl'>{`${isLogin ? '¡Qué bueno conocerte!' : 'Completá tus datos '}`}</h4>
        <form className='flex flex-col gap-2 w-full'>
          {isLogin ? (
            <Button
              onClick={() => signIn('google', { callbackUrl: '/home' })}
              className='bg-none shadow-md w-full border border-gray-300 hover:bg-gradient-to-r from-[#FF8C00] to-[#FFD700] flex justify-center items-center gap-3'
            >
              <Image width={40} height={40} src='/google-logo.png' alt='Google logo' />
              <p className='text-black text-lg'>Continuar con Google</p>
            </Button>
          ) : (
            <div>
              <input
                name='name'
                value={data.name}
                type='text'
                autoComplete='on'
                placeholder='Nombre'
                onChange={handleChange}
                className='textbox h-[48px]'
              />
              <input
                name='age'
                value={data.age}
                type='text'
                autoComplete='on'
                placeholder='Edad'
                onChange={handleChange}
                className='textbox h-[48px]'
              />
              <input
                name='country'
                value={data.country}
                type='text'
                autoComplete='on'
                placeholder='País'
                onChange={handleChange}
                className='textbox h-[48px]'
              />
              <input
                name='province'
                value={data.province}
                type='text'
                autoComplete='on'
                placeholder='Provincia'
                onChange={handleChange}
                className='textbox h-[48px]'
              />
            </div>
          )}
          <Divider />

          <div className='relative w-full'>
            <input
              name='password'
              value={data.password}
              autoComplete='on'
              type={`${visiblePassword ? 'text' : 'password'}`}
              placeholder='Contraseña'
              onChange={handleChange}
              className='textbox h-[46px] pr-9'
            />
            <div className='absolute right-2 top-3' onClick={() => setVisiblePassword(!visiblePassword)}>
              {visiblePassword ? <EyeSlashIcon /> : <Eye />}
            </div>
          </div>
        </form>
        <Button
          onClick={() =>
            signIn('credentials', { redirect: true, email: data.email, password: data.password, callbackUrl: '/home' })
          }
          className='w-full shadow-md border border-gray-300 hover:border-[#FF8C00] hover:bg-none hover:text-[#FF8C00]'
        >
          <p className='text-lg text-center'>INICIAR SESIÓN</p>
        </Button>
        <h3 className=''>¿Olvidó su contaseña?</h3>
        <Button
          name='credentials'
          variant='outline-primary'
          className='w-full border border-[#FF8C00] shadow-md hover:bg-gradient-to-r from-[#FF8C00] to-[#FFD700]'
        >
          <p className='text-lg text-center'>CREAR CUENTA</p>
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
