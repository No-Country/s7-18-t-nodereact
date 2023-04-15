'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const getCountries = async () => {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all');
    if (!res.ok) {
      throw new Error('Error al obtener datos');
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

interface Props {
  handleChange: (data: any) => void;
}

const SelectNationality = ({ handleChange }: Props) => {
  const [options, setOptions] = useState();

  useEffect(() => {
    getCountries().then((dataCountries) => {
      setOptions(
        dataCountries?.map((country: any) => ({
          label: (
            <div className='flex items-center'>
              <div className='w-5'>
                <Image width={30} height={30} src={country.flags.svg} alt={country.translations.spa.common} />
              </div>
              <h3 className='ml-2'>{country.translations.spa.common}</h3>
            </div>
          ),
          value: country.translations.spa.common,
        }))
      );
    });
  }, []);

  return (
    <Select
      classNames={{
        control: (state) => 'h-10 w-full',
      }}
      placeholder='Origen de la receta'
      isClearable
      isSearchable
      options={options}
      //@ts-ignore
      onChange={(selected) => handleChange({ country: selected?.value })}
      //@ts-ignore
      theme={(theme) => ({
        ...theme,
        borderRadius: 6,
        colors: {
          ...theme.colors,
          primary25: '#fdbb74e0',
          primary: '#d1d5db',
          neutral0: '#F4F4F5',
        },
      })}
    />
  );
};
export default SelectNationality;
