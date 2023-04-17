import { ChevronRight } from '@/icons';
import { useAppDispatch } from '@/redux/hooks';
import { showModal } from '@/redux/slices/sliceModals';

interface Props {
  title: string;
  modal: string;
}
const Item = ({ title, modal }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className='flex justify-between items-center w-full h-16 px-4 cursor-pointer hover:bg-orange-50'
      onClick={() => dispatch(showModal(modal))}
    >
      <div className='flex flex-col'>
        <h3 className='text-md font-medium'>{title}</h3>
        <p className='text-xs text-gray-400'>Modificar</p>
      </div>
      <ChevronRight />
    </div>
  );
};
export default Item;
