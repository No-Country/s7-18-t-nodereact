'use client';

import Button from '@/app/components/elements/Button';
import { Eye, EyeSlashIcon } from '@/icons';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import { Divider } from 'react-daisyui';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin, schemaRegister } from './schema';
import { useRouter } from 'next/navigation';
import axios from '../../libs/axios';
import { useAppDispatch } from '@/redux/hooks';
import { IUser, setLogin } from '@/redux/slices/sliceUser';

interface IForm {
  name: string;
  location: string;
  email: string;
  password: string;
}

const initialForm = {
  email: '',
  password: '',
  name: '',
  location: '',
};

const LoginPage = () => {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(isLogin ? schemaLogin : schemaRegister),
  });

  const loginUser = async ({ email, password }) => {
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
      callbackUrl: `${window.location.origin}`,
    });

    res?.ok ? router.push('/home') : console.log(res?.error);

    /*  const {
      data: { name, email, imgAvatar, token },
    } = await axios.post(`/users/authenticate`, {
      email: data?.email,
      password: data?.password,
    });

    if (data) {
      await signIn('credentials', {
        redirect: false,
        email,
        imgAvatar,
        callbackUrl: `${window.location.origin}`,
      });
      const user: IUser = {
        authenticated: true,
        user: {
          name,
          email,
          image: imgAvatar,
        },
        token,
      };
      dispatch(setLogin(user));
      router.push('/home');
    } else {
      console.log('Error');
    } */
  };

  const registerUser = async ({ email, password, ...restData }) => {
    try {
      const user = await axios.post(`/users/register`, {
        email,
        password,
        ...restData,
      });

      loginUser({
        email,
        password,
      });
    } catch (error) {
      console.log({ error });
    }
  };

  const onSubmit = (data: IForm) => (isLogin ? loginUser(data) : registerUser(data));

  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen px-7 py-4 bg-white mx-auto md:grid grid-cols-2'>
      <h2 className='text-4xl mb-10 w-full text-center'>Logo</h2>
      <div className='flex flex-col justify-center items-center gap-2 w-full sm:w-3/4 md:w-full lg:w-3/4 xl:w-3/5'>
        <h4 className='text-xl md:text-3xl'>{`${isLogin ? '¡Qué bueno conocerte!' : 'Completá tus datos '}`}</h4>
        <form className='flex flex-col gap-2 w-full' onSubmit={handleSubmit(onSubmit)}>
          {isLogin ? (
            <Button
              onClick={() => signIn('google', { callbackUrl: '/home' })}
              className='bg-none shadow-md w-full border border-gray-300 hover:bg-gradient-to-r from-[#FF8C00] to-[#FFD700] flex justify-center items-center gap-3'
            >
              <Image width={40} height={40} src='/google-logo.png' alt='Google logo' />
              <p className='text-black text-lg'>Continuar con Google</p>
            </Button>
          ) : (
            <div className='flex flex-col gap-3'>
              <div>
                <input
                  {...register('name')}
                  autoComplete='on'
                  placeholder='Nombre'
                  className={`textbox h-[48px] ${!errors.name && 'focus:shadow-blue-500 focus:border-blue-500'} ${
                    errors.name && 'border-red-500 shadow-red-500'
                  }`}
                />
                {errors.name && <p className='text-xs text-red-500 mt-1'>{errors.name?.message}</p>}
              </div>
              <input
                {...register('location')}
                autoComplete='on'
                placeholder='País'
                className='textbox h-[48px] focus:shadow-blue-500 focus:border-blue-500'
              />
            </div>
          )}
          <Divider />

          <div className='flex flex-col gap-3'>
            <div>
              <input
                {...register('email')}
                autoComplete='on'
                placeholder='Correo electrónico'
                className={`textbox h-[48px] ${!errors.email && 'focus:shadow-blue-500 focus:border-blue-500'} ${
                  errors.email && 'border-red-500 shadow-red-500'
                }`}
              />
              {errors.email && <p className='text-xs text-red-500 mt-1'>{errors.email?.message}</p>}
            </div>
            <div className='relative w-full'>
              <input
                {...register('password')}
                autoComplete='on'
                type={`${visiblePassword ? 'text' : 'password'}`}
                placeholder='Contraseña'
                className={`textbox h-[46px] ${
                  !errors.password && 'focus:shadow-blue-500 focus:border-blue-500'
                } pr-9 ${errors.password && 'border-red-500 shadow-red-500'}`}
              />
              <div className='absolute right-2 top-3' onClick={() => setVisiblePassword(!visiblePassword)}>
                {visiblePassword ? <EyeSlashIcon /> : <Eye />}
              </div>
              {errors.password && <p className='text-xs text-red-500 mt-1'>{errors.password?.message}</p>}
            </div>
          </div>
          {isLogin ? (
            <Button
              type='submit'
              className='w-full shadow-md border border-gray-300 hover:border-[#FF8C00] hover:bg-none hover:text-[#FF8C00]'
            >
              <p className='text-lg text-center'>INICIAR SESIÓN</p>
            </Button>
          ) : (
            <Button
              type='submit'
              variant='outline-primary'
              className='w-full border border-[#FF8C00] shadow-md hover:bg-gradient-to-r from-[#FF8C00] to-[#FFD700]'
            >
              <p className='text-lg text-center'>CREAR CUENTA</p>
            </Button>
          )}
        </form>
        <div className='flex justify-between items-center w-full px-5'>
          {isLogin && <h3 className='text-blue-500 cursor-pointer'>¿Olvidó su contaseña?</h3>}
          <h3 className=''>
            {`${isLogin ? '¿No tenés cuenta?' : '¿Ya tenés cuenta?'}`}
            <span className='ml-2 text-[#ff823f] cursor-pointer' onClick={() => setIsLogin(!isLogin)}>{`${
              isLogin ? 'Registrate aquí' : 'Inicia sesión aquí'
            }`}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
