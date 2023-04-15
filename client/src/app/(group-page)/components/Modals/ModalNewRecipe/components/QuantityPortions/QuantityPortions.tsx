import { UsersGroup } from '@/icons';

interface Props {
  numberServings: number;
  setNumberServings: (value: {}) => void;
}
const QuantityPortions = ({ numberServings, setNumberServings }: Props) => {
  const handleDecrease = () => {
    numberServings > 1 && setNumberServings({ portions: String(numberServings - 1) });
  };

  const handleIncrease = () => setNumberServings({ portions: String(numberServings + 1) });

  return (
    <div className='flex flex-col'>
      <label>
        <span className='text-sm font-semibold'>Porciones</span>
        <div className='flex items-center w-[70%] h-14 bg-zinc-100 rounded-md outline outline-1 outline-gray-300 p-2 gap-2'>
          <UsersGroup width='30' height='30' bg='transparent' />
          <p className='text-sm'>Cantidad:</p>
          <div className='flex justify-between items-center w-3/4 h-full bg-gradient-to-b from-[#ff823f] to-[#ffd700] rounded-lg'>
            <p
              className='text-md font-semibold flex justify-center items-center h-full w-[30%] cursor-pointer active:border border-black rounded-l-md'
              onClick={handleDecrease}
            >
              -
            </p>
            <div className='flex justify-center items-center h-full w-[40%] bg-base-100'>{numberServings}</div>
            <p
              className='text-md font-semibold flex justify-center items-center h-full w-[30%] cursor-pointer active:border border-black rounded-r-md'
              onClick={handleIncrease}
            >
              +
            </p>
          </div>
        </div>
      </label>
    </div>
  );
};
export default QuantityPortions;
