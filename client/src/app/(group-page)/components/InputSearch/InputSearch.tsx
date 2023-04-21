'use client';

import { useState } from 'react';

const InputSearch = () => {
  const [value, setValue] = useState('');

  return (
    <div className='search bg-base-100'>
      <span className='flex-shrink-0 text-gray-500 hover:text-slate-800'>
        <svg className='w-6 h-6 cursor-pointer' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </span>
      <input
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        className='w-full outline-none bg-transparent'
        placeholder='Buscar...'
      />
      {value && (
        <span className='flex-shrink-0 text-slate-400 hover:text-slate-800' onClick={() => setValue('')}>
          <svg className='w-5 h-5 cursor-pointer' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
          </svg>
        </span>
      )}
      <span className='flex-shrink-0 text-slate-500 hover:text-slate-800'>
        <svg
          className='w-6 h-6 cursor-pointer'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M9 6l11 0' />
          <path d='M9 12l11 0' />
          <path d='M9 18l11 0' />
          <path d='M5 6l0 .01' />
          <path d='M5 12l0 .01' />
          <path d='M5 18l0 .01' />
        </svg>
      </span>
    </div>
  );
};
export default InputSearch;
