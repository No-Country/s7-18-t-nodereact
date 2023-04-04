'use client';

import { InputSelect } from '@/app/components';
import { TOption } from '@/app/components/InputSelect/InputSelect';
import { useEffect, useState } from 'react';

const options = [
  { label: 'Postres', value: 'sweet' },
  { label: 'Pastas', value: 'Pastas' },
  { label: 'Ensaladas', value: 'salads' },
];

const SelectCategory = () => {
  const [selected, setSelected] = useState<TOption | null>(null);

  return (
    <>
      <InputSelect placeholder='Categoria' selected={selected} setSelected={setSelected} Options={options} />
    </>
  );
};
export default SelectCategory;
