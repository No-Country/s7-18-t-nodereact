'use client';

import { InputSelectCountry } from '@/app/components';
import { TOptionCountry } from '@/app/components/InputSelect/InputSelectCountry';
import { useState } from 'react';

type Country = {
  name: string;
  abbreviation: string;
  flag: string;
};

const SelectNationality = () => {
  const [selected, setSelected] = useState<TOptionCountry | null>(null);

  return <InputSelectCountry selected={selected} setSelected={setSelected} />;
};
export default SelectNationality;
