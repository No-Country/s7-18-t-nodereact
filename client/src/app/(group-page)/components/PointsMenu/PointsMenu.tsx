'use client';

import { EyeSlashIcon, PointsMenuIcon, TrashIcon } from '@/icons';
import { useState } from 'react';

type TOption = {
  label: string;
  icon: React.ReactNode;
  action: any;
};

interface Props {
  options: TOption[];
}

const BoxOptions = ({ options }: Props) => {
  return (
    <div
      className={`absolute top-[120%] -right-3
           flex flex-col
           min-w-max
           h-[${options.length * 40}px]
           rounded-md 
           border border-gray-300 
           bg-base-100 shadow-md z-50
           overflow-hidden`}
    >
      {options &&
        options.map((option, index) => (
          <div key={index} className='menu-item' onClick={option.action}>
            {option.icon} {option.label}
          </div>
        ))}
    </div>
  );
};

const PointsMenu = ({ options }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div tabIndex={0} className='relative' onClick={() => setOpen(!open)} onBlur={() => setOpen(false)}>
      <PointsMenuIcon />
      {open && <BoxOptions options={options} />}
    </div>
  );
};
export default PointsMenu;
