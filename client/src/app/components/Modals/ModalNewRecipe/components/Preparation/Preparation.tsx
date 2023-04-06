const Preparation = () => {
  return (
    <div className='form-control w-full'>
      <label>
        <span className='text-sm font-semibold'>Preparación</span>
      </label>
      <textarea
        className='textarea textarea-md
                   lg:h-40 xl:h-72
                   textarea-warning rounded-md 
                   border-gray-300 mb-2
                   resize-none'
        placeholder='Escribe la preparación'
      ></textarea>
    </div>
  );
};
export default Preparation;
