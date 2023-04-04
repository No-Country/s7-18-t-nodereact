import { CardFollower, LikesUsers } from './components'; // Followers page components
const Followers = new Array(18).fill('');

const page = () => {
  return (
    <div className='flex flex-col gap-5 w-11/12 md:w-4/5 lg:w-5/6 h-full mx-auto pt-8'>
      <div className='flex flex-col md:flex-row justify-between'>
        <div
          className='flex flex-row md:flex-col items-center
                        md:items-start gap-5 md:gap-0'
        >
          <h3 className='text-md text-black font-semibold'>Seguidores</h3>
          <p className='text-xs text-gray-400'>Personas que siguen tu contenido</p>
        </div>
        <LikesUsers />
      </div>
      <div
        className='flex flex-wrap justify-between md:justify-start md:gap-x-7
                   lg:gap-x-0 lg:justify-between gap-y-7
                   xl:gap-x-5 xl:justify-start
                   2xl:gap-x-9 3xl:gap-x-5'
      >
        {Followers.map((el, idx) => (
          <CardFollower key={idx} />
        ))}
      </div>
    </div>
  );
};
export default page;
