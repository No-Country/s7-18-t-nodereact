import { PointsMenu } from '@/icons';

const CardFollower = () => {
  return (
    <div className='flex flex-col  w-[154px] h-[104px] md:w-[183px] md:h-[225px] bg-white shadow-md rounded-xl'>
      <div className='flex justify-end pr-5'>
        <PointsMenu />
      </div>
    </div>
  );
};
export default CardFollower;
