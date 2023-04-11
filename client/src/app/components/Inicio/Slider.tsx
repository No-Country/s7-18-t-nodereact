'use client';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from '@/icons';

interface Props {
  screen: number;
  screenChange: (nextPage: number) => void;
}

const Slider = ({ screen, screenChange }: Props) => {
  const router = useRouter();

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-row gap-1 justify-center items-center'>
        <div
          className={`w-4 h-4 ${screen === 1 ? 'bg-black' : 'bg-gray-400'} rounded-3xl cursor-pointer`}
          onClick={() => screenChange(1)}
        ></div>
        <div
          className={`w-4 h-4 ${screen === 2 ? 'bg-black' : 'bg-gray-400'} rounded-3xl cursor-pointer`}
          onClick={() => screenChange(2)}
        ></div>
        <div
          className={`w-4 h-4 ${screen === 3 ? 'bg-black' : 'bg-gray-400'} rounded-3xl cursor-pointer`}
          onClick={() => screenChange(3)}
        ></div>
      </div>
      <div className={`flex h-20 w-full px-10 items-center ${screen === 1 ? 'justify-end' : 'justify-between'}`}>
        <div className={`${screen === 1 && 'hidden'} cursor-pointer`} onClick={() => screenChange(screen - 1)}>
          <ChevronLeft width='30' height='30' />
        </div>
        <div
          className='cursor-pointer'
          onClick={() => (screen < 3 ? screenChange(screen + 1) : router.push('/auth/signIn'))}
        >
          <ChevronRight width='30' height='30' />
        </div>
      </div>
    </div>
  );
};
export default Slider;
