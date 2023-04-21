'use client';

import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState } from 'react';

const getCountry = async (country: string) =>
  (await axios.get(`https://restcountries.com/v3.1/alpha/${country}`)).data[0].translations.spa.common;

//country.translations.spa.common

interface Props {
  title: string;
  country: string;
}

const TitleRecipe = ({ title, country }: Props) => {
  const [countryName, setCountryName] = useState<string>('');
  useEffect(() => {
    getCountry(country).then((name) => setCountryName(name));
  }, [country]);

  return (
    <div className='w-max h-16 bg-slate-300 opacity-60 ml-5 mb-8 p-2'>
      <h2 className='text-lg font-bold text-black'>{title}</h2>
      <div className='flex gap-3'>
        <h3 className='text-md font-semibold text-black'>{countryName}</h3>
        {country && (
          <Image width='30' height='20' src={`https://www.flagcdn.com/${country.toLowerCase()}.svg`} alt={country} />
        )}
      </div>
    </div>
  );
};
export default TitleRecipe;
