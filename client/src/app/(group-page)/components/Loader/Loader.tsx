const Loader = () => {
  return (
    <div
      className='animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-current rounded-full dark:text-white'
      role='status'
      aria-label='loading'
    >
      <span className='sr-only'>Loading...</span>
    </div>
  );
};
export default Loader;
