'use client';

import { useEffect, useState } from 'react';
import { InputSelect } from '@/app/components';
import { TOption } from '@/app/components/InputSelect/InputSelect';

const options = [
  { label: 'Fácil', value: 'easy' },
  { label: 'Media', value: 'medium' },
  { label: 'Difícil', value: 'difficult' },
];

const SelectDifficulty = () => {
  const [selected, setSelected] = useState<TOption | null>(null);

  return (
    <>
      <InputSelect placeholder='Dificultad' selected={selected} setSelected={setSelected} Options={options} />
    </>
  );
};
export default SelectDifficulty;
