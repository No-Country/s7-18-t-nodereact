import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';


const ProfileFollowing = ({res}) => {

    const [profile, setProfile] = useState()

    useEffect(() => {
        const URL = `http://localhost:5000/api/v1/users/profile/${res}`
        axios.get(URL)
            .then(res => setProfile(res.data))
            .catch(err => console.log(err))
    }, [])
    

  return (
    <div className='flex flex-col justify-center items-center'>
              <Image className='rounded-full' width={50} height={50} src={profile?.img_avatar} alt='imagen de perfil' />
              <h3>{profile?.name}</h3>
    </div>
  )
}

export default ProfileFollowing