import axiosApi from '@/app/libs/axios';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IProfile } from '@/redux/slices/sliceUser';
import { limitString } from '@/app/libs';

const ProfileFollowers = ({ res }) => {
  const [profile, setProfile] = useState<IProfile>();

  useEffect(() => {
    const URL = `/users/profile/${res}`;
    axiosApi
      .get(URL)
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err));
  }, [res]);
  return (
    <div className='flex flex-col justify-center items-center'>
      <Image className='rounded-full' width={50} height={50} src={profile?.img_avatar || ''} alt='imagen de perfil' />
      <h3>{limitString(profile?.name, 10)}</h3>
    </div>
  );
};

export default ProfileFollowers;
