interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const ArchivedIcon = ({ width = 20, height = 20, color = '#82878B' }: Props) => {
  return (
    <svg width={width} height={height} viewBox='0 0 21 26' fill='none'>
      <path
        d='M17.9588 0.029541H3.67306C2.10163 0.029541 0.815918 1.31526 0.815918 2.88668V25.7438L10.8159 21.4581L20.8159 25.7438V2.88668C20.8159 1.31526 19.5302 0.029541 17.9588 0.029541ZM17.9588 21.4581L10.8159 18.3438L3.67306 21.4581V2.88668H17.9588V21.4581Z'
        fill={color}
      />
    </svg>
  );
};
export default ArchivedIcon;
