'use client';

import { DropdownButtonIcon } from '@/icons';
import { useState } from 'react';

export type TOption = {
  label: string | React.ReactNode;
  value: string;
};

interface Props {
  selected: TOption | null;
  setSelected: (value: TOption) => void;
  Options: TOption[] | null;
  width?: string;
  placeholder?: string;
}

const InputSelect = ({ selected, setSelected, Options, width = '100%', placeholder }: Props) => {
  const [open, setOpen] = useState(false);

  const BoxOptions = () => {
    return (
      <div
        className={`absolute top-[120%]
           flex flex-col
           h-[${Options?.length ? Options.length * 40 : 40}px]
           max-h-60
           w-fit
           rounded-md 
           border border-gray-300 
           bg-base-100 shadow-sm z-50
           overflow-y-auto overflow-x-hidden`}
      >
        {Options &&
          Options.map((option) => (
            <div
              key={option.value}
              className='py-2 px-6 cursor-pointer hover:bg-orange-100 
              active:bg-gradient-to-b from-[#ff823f] to-[#ffd700]'
              onClick={() => setSelected(option)}
            >
              {option.label}
            </div>
          ))}
      </div>
    );
  };

  return (
    <div
      tabIndex={0}
      className={`relative h-10 rounded-md outline outline-1 outline-gray-300 w-[${width}]`}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <div className='flex justify-between items-center h-full w-full bg-zinc-100 overflow-hidden pr-2'>
        <h3 className='w-11/12 h-full flex items-center ml-1 overflow-hidden pl-2'>
          {selected?.label || <span className='text-gray-400'>{placeholder}</span>}
        </h3>
        <DropdownButtonIcon />
      </div>

      {open && <BoxOptions />}
    </div>
  );
};
export default InputSelect;
