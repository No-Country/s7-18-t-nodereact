import { AvatarIcon, Settings } from '@/icons';

export interface Props {
  children: React.ReactNode;
}
const CardProfile = ({ children }: Props) => {
  return (
    <div className='flex flex-col card w-full h-64  bg-base-100 shadow-md pb-2'>
      <div className='h-1/2 bg-gradient-to-b from-[#ff823f] to-[#ffd700]'></div>
      <div className='flex h-1/2 w-full'>
        <div className='flex justify-end w-[20%] ml-3 mr-2 -translate-y-10'>
          <AvatarIcon width={80} height={80} />
        </div>
        <div className='flex justify-start items-start flex-wrap w-[80%] mt-1'>
          {children}
          <p className='text-xs h-20 mr-2 overflow-y-auto'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </p>
        </div>
      </div>
    </div>
  );
};
export default CardProfile;
