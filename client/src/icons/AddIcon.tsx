interface Props {
  width: number;
  height: number;
}

const AddIcon = ({ width, height }: Props) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' fill='none'>
      <path
        d='M3.25 23.25C2.5625 23.25 1.97396 23.0052 1.48438 22.5156C0.994792 22.026 0.75 21.4375 0.75 20.75V3.25C0.75 2.5625 0.994792 1.97396 1.48438 1.48438C1.97396 0.994792 2.5625 0.75 3.25 0.75H14.5V3.25H3.25V20.75H20.75V9.5H23.25V20.75C23.25 21.4375 23.0052 22.026 22.5156 22.5156C22.026 23.0052 21.4375 23.25 20.75 23.25H3.25ZM18.25 8.25V5.75H15.75V3.25H18.25V0.75H20.75V3.25H23.25V5.75H20.75V8.25H18.25ZM4.5 18.25H19.5L14.8125 12L11.0625 17L8.25 13.25L4.5 18.25Z'
        fill='#FF8C00'
      />
    </svg>
  );
};
export default AddIcon;
