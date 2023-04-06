interface Props {
  color?: string;
}
const DropdownButtonIcon = ({ color = '#6B7280' }: Props) => {
  return (
    <svg width='14' height='8' viewBox='0 0 14 8' fill='none' className='cursor-pointer'>
      <path
        d='M12.25 1.25L7 6.5L1.75 1.25'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export default DropdownButtonIcon;
