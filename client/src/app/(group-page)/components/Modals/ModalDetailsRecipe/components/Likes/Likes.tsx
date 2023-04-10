const Likes = () => {
  return (
    <>
      <div className='flex items-center gap-2 py-2'>
        <div className='avatar sm:m-0'>
          <div className='avatar-group -space-x-3'>
            <div className='avatar border-1 border-slate-800'>
              <div className='w-2 h-2 bg-slate-800'></div>
            </div>
            <div className='avatar border-1 border-slate-400'>
              <div className='w-2 h-2 bg-slate-400'></div>
            </div>
            <div className='avatar border-1 border-slate-600'>
              <div className='w-2 h-2 bg-slate-600'></div>
            </div>
          </div>
        </div>
        <p className='text-xs'>Le gusta a Usuario y 20 personas más.</p>
      </div>
      <p className='pl-2 pb-2 text-sm text-gray-500 hover:text-[#ff823f]'>Ver los 5 comentarios</p>
    </>
  );
};
export default Likes;
