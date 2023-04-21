interface Props {
  width?: string;
  height?: string;
  color?: string;
}

const StarIcon = ({ width = '21', height = '19', color = '#1F2A37' }: Props) => {
  return (
    <svg width={width} height={height} viewBox='0 0 21 19' fill='none' className='cursor-pointer'>
      <path
        d='M7.35 14.825L10.5 12.925L13.65 14.85L12.825 11.25L15.6 8.85L11.95 8.525L10.5 5.125L9.05 8.5L5.4 8.825L8.175 11.25L7.35 14.825ZM4.325 19L5.95 11.975L0.5 7.25L7.7 6.625L10.5 0L13.3 6.625L20.5 7.25L15.05 11.975L16.675 19L10.5 15.275L4.325 19Z'
        fill={color}
      />
    </svg>
  );
};
export default StarIcon;
