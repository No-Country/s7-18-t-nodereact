'use client';

import { DropdownButtonIcon } from '@/icons';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export type TOptionCountry = {
  label: React.ReactNode;
  value: React.ReactNode;
};

interface Props {
  selected: TOptionCountry | null;
  setSelected: (value: TOptionCountry) => void;
  width?: string;
}

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

/* 
  useEffect(() => {
    setLabels(
      countries.map((country) => ({
        label: (
          <div className='flex items-center'>
            <div className='w-5'>
              <Image width={30} height={30} src={country.flag} alt={country.abbreviation} />
            </div>
            <h3 className='ml-2'>{country.name}</h3>
          </div>
        ),
        value: (
          <div className='flex items-center gap-2'>
            <div className='w-5'>
              <Image width={20} height={20} src={country.flag} alt={country.abbreviation} />
            </div>
            <h3>{country.abbreviation}</h3>
          </div>
        ),
      }))
    );
  }, [countries]);


 useEffect(() => {
    getCountries().then((dataCountries) => {
      setCountries(
        dataCountries?.map((country: any) => ({
          name: country.translations.spa.official,
          abbreviation: country.cioc ?? country.cca3,
          flag: country.flags.svg,
        }))
      );
    });
  }, []);

*/

const InputSelectCountry = ({ selected, setSelected, width = '100%' }: Props) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<TOptionCountry[] | null>();

  useEffect(() => {
    getCountries().then((dataCountries) => {
      setOptions(
        dataCountries?.map((country: any) => ({
          label: (
            <div className='flex items-center'>
              <div className='w-5'>
                <Image width={30} height={30} src={country.flags.svg} alt={country.translations.spa.official} />
              </div>
              <h3 className='ml-2'>{country.translations.spa.official}</h3>
            </div>
          ),
          value: (
            <div className='flex items-center gap-2'>
              <div className='w-5'>
                <Image width={20} height={20} src={country.flags.svg} alt={country.cioc ?? country.cca3} />
              </div>
              <h3>{country.cioc ?? country.cca3}</h3>
            </div>
          ),
        }))
      );
    });
  }, []);

  const BoxOptions = () => {
    return (
      <div
        className={`absolute top-[120%]
           flex flex-col
           h-[${options?.length ? options.length * 40 : 40}px]
           max-h-60
           w-fit
           rounded-md 
           border border-gray-300 
           bg-base-100 shadow-sm z-50
           overflow-y-auto overflow-x-hidden`}
      >
        {options &&
          options.map((option, index) => (
            <div
              key={index}
              className='p-2 cursor-pointer hover:bg-orange-100 
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
      className={`relative flex h-10 rounded-md outline outline-1 outline-gray-300 w-[${width}]  bg-transparent`}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <div className='flex justify-between items-center h-full w-[50%] bg-zinc-100 overflow-hidden pr-2'>
        <h3 className='w-11/12 h-full flex items-center ml-1 overflow-hidden text-sm'>{selected?.value}</h3>
        <DropdownButtonIcon />
      </div>
      <h3 className='flex items-center text-sm text-gray-400 pl-2 border-l border-gray-300 bg-zinc-100 w-full'>
        Origen de la receta
      </h3>

      {open && <BoxOptions />}
    </div>
  );
};
export default InputSelectCountry;
