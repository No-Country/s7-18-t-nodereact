import Image from 'next/image';

interface Props {
  width: number;
  height: number;
}

const AvatarIcon = ({ width, height }: Props) => {
  return (
    <div className='rounded-full overflow-hidden h-fit w-fit border-2 border-stone-600'>
      <Image width={width} height={height} src='/profile-icon-1.png' alt='avatar' />
    </div>
  );
};
export default AvatarIcon;
