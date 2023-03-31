interface Props {
  textColor?: string;
}

const Statfollowers = ({ textColor = 'white' }: Props) => {
  return (
    <div className='flex flex-col gap-1 p-0 w-20'>
      <div className={`w-full h-6 text-xl text-center leading-6 font-medium text-${textColor}`}>15k</div>
      <div className={`w-full h-5 text-sm text-center leading-4 font-light text-${textColor}`}>Seguidores</div>
    </div>
  );
};
export default Statfollowers;
