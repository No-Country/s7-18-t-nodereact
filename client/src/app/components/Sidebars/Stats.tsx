const Stat = () => {
  return (
    <div className='flex justify-center items-start py-0 px-["5px"] gap-["10px"]'>
      <div className='flex flex-col items-center gap-1 p-0 w-24'>
        <div className='w-9 h-6 text-xl leading-6 font-medium text-white'>148</div>
        <div className='w-24 h-5 text-sm leading-4 font-light text-white'>Publicaciones</div>
      </div>
      <div className='flex flex-col items-center gap-1 p-0 w-20'>
        <div className='w-9 h-6 text-xl leading-6 font-medium text-white'>15k</div>
        <div className='w-24 h-5 text-sm leading-4 font-light text-white'>Seguidores</div>
      </div>
      <div className='flex flex-col items-center gap-1 p-0 w-16'>
        <div className='w-9 h-6 text-xl leading-6 font-medium text-white'>1k</div>
        <div className='w-24 h-5 text-sm leading-4 font-light text-white'>Seguidos</div>
      </div>
    </div>
  );
};
export default Stat;

/* absolute top-44 left-12 */
