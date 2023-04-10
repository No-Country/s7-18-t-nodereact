export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  variant?:
    | 'primary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-success'
    | 'outline-primary'
    | 'none-primary';
  square?: boolean;
  paddingLess?: boolean;
}
const Button = ({ className, children, variant, square, paddingLess, type = 'button', ...props }: IButtonProps) => {
  const getVariant = () => {
    switch (variant) {
      case 'none-primary':
        return 'bg-none hover:border-[#FF8C00] text-black shadow shadow-md ';

      case 'outline-primary':
        return 'bg-white text-[#FF8C00] border-5 border-[#FF8C00] hover:text-white hover:bg-gradient-to-r from-[#FF8C00] to-[#FFD700] ';

      default:
        return 'bg-gradient-to-r from-[#FF8C00] to-[#FFD700] hover:border-[#FF8C00] text-white shadow shadow-md active:bg-none active:text-[#FF8C00]';
    }
  };
  return (
    <button
      {...props}
      type={type}
      className={`
 
        ${getVariant()}  transition duration-400  ${!paddingLess && 'py-2 px-4'}  ${
        !square && 'rounded-md'
      } active:scale-[.98] ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
