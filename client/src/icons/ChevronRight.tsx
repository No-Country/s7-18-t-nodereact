interface Props {
  width?: string;
  height?: string;
}
const ChevronRight = ({ width = '24', height = '24' }: Props) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24'>
      <path d='M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z'></path>
    </svg>
  );
};
export default ChevronRight;
