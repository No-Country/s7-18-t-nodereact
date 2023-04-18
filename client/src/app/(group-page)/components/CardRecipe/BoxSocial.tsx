import BtnArchive from './BtnArchive';
import BtnComment from './BtnComment';
import BtnFavorite from './BtnFavorite';

interface Props {
  likes: string[];
}

const BoxSocial = ({ likes }: Props) => {
  return (
    <div className='flex flex-col justify-between items-center p-4 w-16 h-40 self-end bg-gray-300 opacity-50 rounded-l-3xl z-10'>
      <BtnArchive />
      <BtnFavorite likes={likes} />
      <BtnComment />
    </div>
  );
};
export default BoxSocial;
