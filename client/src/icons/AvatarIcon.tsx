import Image from 'next/image';
import avatar from './assets/profile-icon-1.png';

interface Props {
  width: number;
  height: number;
}

const AvatarIcon = ({ width, height }: Props) => {
  return (
    <div className='rounded-full overflow-hidden h-fit w-fit border-2 border-stone-600'>
      <Image width={width} height={height} src={avatar} alt='avatar' />
    </div>
  );
};
export default AvatarIcon;
