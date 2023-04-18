interface Props {
  width?: string;
  height?: string;
  color?: string;
}
const AddUserIcon = ({ width = '24', height = '24', color = '#5A5A5A' }: Props) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24'>
      <path d='M4.5 8.552c0 1.995 1.505 3.5 3.5 3.5s3.5-1.505 3.5-3.5-1.505-3.5-3.5-3.5-3.5 1.505-3.5 3.5zM19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 19h10v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2z'></path>
    </svg>
  );
};
export default AddUserIcon;
