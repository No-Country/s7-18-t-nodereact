import Image from 'next/image';

interface Props {
  width?: number;
  height?: number;
  image?: string;
}

const AvatarIcon = ({ width = 40, height = 40, image = '/profile-icon-1.png' }: Props) => {
  return (
    <Image
      width={width}
      height={height}
      src={image}
      alt='avatar'
      className={`rounded-full w-[${width}px] h-[${height}px] border-2 border-[#FF8C00]`}
    />
  );
};
export default AvatarIcon;

{
  /* <div className={`rounded-full overflow-hidden w-[${width}px] h-[${height}px] border-2 border-[#FF8C00]`}>
    </div> */
}
