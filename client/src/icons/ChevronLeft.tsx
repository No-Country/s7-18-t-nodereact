interface Props {
  width?: string;
  height?: string;
}
const ChevronLeft = ({ width = '24', height = '24' }: Props) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24'>
      <path d='M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z'></path>
    </svg>
  );
};
export default ChevronLeft;
