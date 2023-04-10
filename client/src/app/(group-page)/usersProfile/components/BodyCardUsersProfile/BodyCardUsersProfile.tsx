import { FollowUserIcon, Settings } from '@/icons';

const BodyCardUsersProfile = () => {
  return (
    <>
      <h2 className='text-md mt-1 xl:text-2xl font-semibold'>Nombre Usuario</h2>
      <button className='btn-personalized-outline mx-3'>
        <FollowUserIcon />
        <p className='ml-1 text-black'>Seguir</p>
      </button>
    </>
  );
};
export default BodyCardUsersProfile;
