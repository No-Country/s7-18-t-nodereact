import Image from 'next/image';

const Profile = () => {
  return (
    <div className='flex gap-2'>
      <div className='avatar'>
        <div className='w-[80px] rounded-full border border-[#FF8C00]'>
          <Image
            width='100'
            height='100'
            alt='Profile'
            src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
          />
        </div>
      </div>
      <div className='flex flex-col justify-around'>
        <h2 className='text-2xl text-white'>Nombre Perfil</h2>
        <p className='text-xs text-white'>Cambiar cuenta</p>
      </div>
    </div>
  );
};
export default Profile;
