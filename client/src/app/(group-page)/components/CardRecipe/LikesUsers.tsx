const LikesUsers = () => {
  return (
    <div className='flex items-center gap-2'>
      <div className='avatar ml-1 sm:m-0 pt-3'>
        <div className='avatar-group -space-x-4'>
          <div className='avatar border-1 border-slate-800'>
            <div className='w-4 h-4 bg-slate-800'></div>
          </div>
          <div className='avatar border-1 border-slate-400'>
            <div className='w-4 h-4 bg-slate-400'></div>
          </div>
          <div className='avatar border-1 border-slate-600'>
            <div className='w-4 h-4 bg-slate-600'></div>
          </div>
        </div>
      </div>
      <p className='text-xs'>Les gusta a estos usuarios y a 20 personas más</p>
    </div>
  );
};
export default LikesUsers;
