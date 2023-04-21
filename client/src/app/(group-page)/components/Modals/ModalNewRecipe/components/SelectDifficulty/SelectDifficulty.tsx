'use client';

import { IOption } from '../../ModalNewRecipe';
import Select from 'react-select';

const options = [
  { label: 'Fácil', value: 'Fácil' },
  { label: 'Regular', value: 'Regular' },
  { label: 'Difícil', value: 'Difícil' },
];

interface Props {
  handleChange: (data: any) => void;
}

const SelectDifficulty = ({ handleChange }: Props) => (
  <Select
    classNames={{
      control: (state) => 'h-10',
    }}
    classNamePrefix='select'
    placeholder='Dificultad'
    isClearable={true}
    isSearchable={true}
    name='color'
    options={options}
    onChange={(selected) => handleChange({ difficulty: selected?.value })}
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

export default SelectDifficulty;
