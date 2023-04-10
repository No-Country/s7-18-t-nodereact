import BtnArchive from './BtnArchive';
import BtnComment from './BtnComment';
import BtnFavorite from './BtnFavorite';

const BoxSocial = () => {
  return (
    <div className='flex flex-col justify-between items-center p-4 w-16 h-40 self-end bg-gray-300 opacity-60 rounded-l-3xl'>
      <BtnArchive />
      <BtnFavorite />
      <BtnComment />
    </div>
  );
};
export default BoxSocial;
