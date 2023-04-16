interface Props {
  textColor?: string;
  following: string[] | null | undefined;
}

const Statfollowed = ({ following, textColor = 'white' }: Props) => {
  return (
    <div className='flex flex-col gap-1 p-0 w-16'>
      <div className={`w-full h-6 text-xl text-center leading-6 font-medium text-${textColor}`}>
        {following?.length}
      </div>
      <div className={`w-full h-5 text-sm text-center leading-4 font-light text-${textColor}`}>Seguidos</div>
    </div>
  );
};
export default Statfollowed;
