import { UsersGroup } from '@/icons';

const QuantityPortions = () => {
  return (
    <div className='flex flex-col'>
      <label>
        <span className='text-sm font-semibold'>Porciones</span>
        <div className='flex items-center w-[70%] h-14 bg-zinc-100 rounded-md outline outline-1 outline-gray-300 p-2 gap-2'>
          <UsersGroup width='30' height='30' bg='transparent' />
          <p className='text-sm'>Cantidad:</p>
          <div className='flex justify-between items-center w-3/4 h-full bg-zinc-300 rounded-lg'>
            <p className='text-md font-semibold flex justify-center items-center h-full w-[30%]'>-</p>
            <div className='flex justify-center items-center h-full w-[40%] bg-base-100'>4</div>
            <p className='text-md font-semibold flex justify-center items-center h-full w-[30%]'>+</p>
          </div>
        </div>
      </label>
    </div>
  );
};
export default QuantityPortions;
