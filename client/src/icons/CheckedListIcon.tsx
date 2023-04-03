interface Props {
  width?: string;
  height?: string;
  color?: string;
}

const CheckedListIcon = ({ width = '17', height = '14', color = '#9CA3AF' }: Props) => {
  return (
    <svg width={width} height={height} viewBox='0 0 17 14' fill='none'>
      <path
        d='M0 0.794434H11V2.79443H0V0.794434ZM0 4.79443H11V6.79443H0V4.79443ZM0 8.79443H7V10.7944H0V8.79443ZM15.299 6.08643L10.999 10.3774L9.707 9.08643L8.293 10.5014L10.999 13.2054L16.711 7.50243L15.299 6.08643Z'
        fill={color}
      />
    </svg>
  );
};
export default CheckedListIcon;
