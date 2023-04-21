'use client';

import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image';

{
  /* <AvatarIcon width={80} height={80} image={user?.img_avatar || ''} /> */
}
export interface Props {
  children: React.ReactNode;
}
const CardProfile = ({ children }: Props) => {
  const { user } = useAppSelector((state) => state.userReducer);
  return (
    <div className='flex flex-col card w-full h-64  bg-base-100 shadow-md pb-2'>
      <div className='h-1/2 bg-[url("/vegetables.webp")]'></div>
      <div className='flex h-1/2 w-full'>
        <div className='flex justify-end w-[20%] ml-3 mr-2 -translate-y-10'>
          <Image
            width='80'
            height='80'
            src={user?.img_avatar || ''}
            alt='avatar'
            className='rounded-full w-[80px] h-[80px] border-2 border-[#FF8C00]'
          />
        </div>
        <div className='flex justify-between items-start w-[80%] mt-1'>{children}</div>
        {/* <h4 className='text-xs mr-2 overflow-y-auto'>{user?.bio ? user.bio : 'No posee biografia'}</h4> */}
      </div>
    </div>
  );
};
export default CardProfile;
