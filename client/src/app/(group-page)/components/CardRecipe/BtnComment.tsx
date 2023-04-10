import { CommentBalloonIcon } from '@/icons';

const BtnComment = () => {
  return (
    <div className='tooltip tooltip-bottom' data-tip='💬 26'>
      <div className='flex justify-center items-center w-9 h-9 bg-gray-500 rounded-full'>
        <CommentBalloonIcon width={25} height={25} color='#fff' opacity='1' />
      </div>
    </div>
  );
};
export default BtnComment;
