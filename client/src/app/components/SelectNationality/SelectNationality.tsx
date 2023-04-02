'use client';

import { useEffect, useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';

type Country = {
  name: string;
  code: string;
  abbreviation: string;
};

interface Props {
  countries: Country[];
}
const SelectNationality = ({ countries }: Props) => {
  const [selected, setSelected] = useState('AR');
  const [labels, setLabels] = useState({});

  useEffect(() => {
    setLabels(
      countries.reduce((acc: any, country: Country) => {
        !acc[country.code] && (acc[country.code] = {});
        acc[country.code] = { primary: country.name, secondary: country.abbreviation };
        return acc;
      }, {})
    );
  }, [countries]);

  return (
    <ReactFlagsSelect
      customLabels={labels && labels}
      placeholder=' '
      searchPlaceholder='Buscar...'
      showSelectedLabel={false}
      showSecondarySelectedLabel={true}
      showOptionLabel={true}
      showSecondaryOptionLabel={false}
      searchable
      selected={selected}
      onSelect={(code) => setSelected(code)}
      selectedSize={16}
      className='w-[180px]'
    />
  );
};
export default SelectNationality;
