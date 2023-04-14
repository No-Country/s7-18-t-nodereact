import Image from 'next/image';

interface Props {
  width?: number;
  height?: number;
  image?: string;
}

const AvatarIcon = ({ width, height, image = '/profile-icon-1.png' }: Props) => {
  return (
    <div className='rounded-full overflow-hidden h-fit w-fit border-2 border-[#FF8C00]'>
      <Image width={width} height={height} src={image} alt='avatar' />
    </div>
  );
};
export default AvatarIcon;
