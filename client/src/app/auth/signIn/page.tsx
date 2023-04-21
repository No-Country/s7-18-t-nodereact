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
import { Loader } from '@/app/(group-page)/components';

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
    reset,
    formState: { errors, isSubmitted },
  } = useForm<IForm>({
    resolver: yupResolver(isLogin ? schemaLogin : schemaRegister),
  });

  const loginUser = async ({ email, password }) => {
    const { data } = await axios.post(`/users/authenticate`, {
      email,
      password,
    });
    if (data.token) {
      const res = await signIn('credentials', {
        redirect: false,
        email: data.email,
        name: data.name,
        image: data.imgAvatar,
        callbackUrl: `${window.location.origin}`,
      });
      const { data: profile } = await axios.get(`/users/profile/${data._id}`, {
        headers: { authorization: `Bearer ${data.token}` },
      });
      dispatch(setLogin({ token: data.token, user: profile }));
      reset();
      res?.ok ? router.push('/home') : console.log(res?.error);
    }
  };

  const registerUser = async ({ email, password, name, location }) => {
    try {
      const { data: user } = await axios.post(`/users/register`, {
        email,
        password,
        name,
        location,
      });

      if (user) {
        loginUser({
          email,
          password,
        });
      }
    } catch (error) {
      console.log('reg => ', { error });
    }
  };

  const onSubmit = (data: IForm) => (isLogin ? loginUser(data) : registerUser(data));

  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen px-7 py-4 bg-white mx-auto md:grid grid-cols-2 md:p-0'>
      <div className='hidden md:flex justify-center items-center w-full h-full bg-gradient-to-r from-[#ff823f] to-[#ffd700]'>
        <Image width={500} height={500} src='/img/svg/logo.svg' alt='logo' />
      </div>
      <div className='flex justify-center p-5 w-full h-full'>
        <div className='flex flex-col justify-center items-center gap-2 w-full sm:w-3/4 md:w-full lg:w-3/4 xl:w-3/'>
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
                className='flex gap-3 justify-center w-full shadow-md border border-gray-300 hover:border-[#FF8C00] hover:bg-none hover:text-[#FF8C00]'
              >
                {isSubmitted && <Loader />}
                <p className='text-lg text-center'>INICIAR SESIÓN</p>
              </Button>
            ) : (
              <Button
                type='submit'
                variant='outline-primary'
                className='flex gap-3 justify-center w-full border border-[#FF8C00] shadow-md hover:bg-gradient-to-r from-[#FF8C00] to-[#FFD700]'
              >
                {isSubmitted && <Loader />}
                <p className='text-lg text-center'>CREAR CUENTA</p>
              </Button>
            )}
          </form>
          <div className='flex flex-col sm:flex-row justify-between items-center w-full px-5'>
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
    </div>
  );
};

export default LoginPage;
