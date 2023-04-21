'use client';

import { PointsMenu } from '@/app/(group-page)/components';
import { useEffect, useState } from 'react';
import axiosApi from '@/app/libs/axios';
import { IProfile } from '@/redux/slices/sliceUser';
import { EyeSlashIcon, TrashIcon } from '@/icons';
import Image from 'next/image';

const optionsMenu = [
  {
    label: 'Eliminar',
    icon: <TrashIcon />,
    action: () => {},
  },
  {
    label: 'Ocultar',
    icon: <EyeSlashIcon />,
    action: () => {},
  },
];

interface Props {
  id: string;
}

const CardFollower = ({ id }: Props) => {
  const [profile, setProfile] = useState<IProfile>();

  useEffect(() => {
    axiosApi
      .get(`/users/profile/${id}`)
      .then(({ data }) => setProfile(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <div className='flex flex-col gap-1 md:gap-3 w-[154px] h-[104px] md:w-[183px] md:h-[225px] bg-white shadow-md rounded-xl'>
        <div className='flex justify-end pr-5'>
          <PointsMenu options={optionsMenu} />
        </div>
        <div className='flex justify-center'>
          <Image
            width='36'
            height='36'
            src={profile?.img_avatar || ''}
            alt='author'
            className='rounded-full w-9 h-9 border border-[#FF8C00]'
          />
        </div>
        <div className='flex justify-center'>
          <p className='text-md font-medium text-black'>{profile?.name}</p>
        </div>
        <div className='hidden md:flex justify-center'>
          <p className='text-xs text-black text-center'>{profile?.bio || 'No posee biografia'}</p>
        </div>
        <button className='btn-primary hidden md:inline-block w-28 h-8 self-center'>Ver Perfil</button>
      </div>
    </>
  );
};
export default CardFollower;
