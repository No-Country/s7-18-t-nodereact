'use client';

import Select from 'react-select';
import { IOption } from '../../ModalNewRecipe';

const options = [
  { label: 'Carnes', value: 'Carnes' },
  { label: 'Ensaladas', value: 'Ensaladas' },
  { label: 'Entrada', value: 'Entrada' },
  { label: 'Minutas', value: 'Minutas' },
  { label: 'Pastas', value: 'Pastas' },
  { label: 'Pescado', value: 'Pescado' },
  { label: 'Plato fuerte', value: 'Plato fuerte' },
  { label: 'Pollo', value: 'Pollo' },
  { label: 'Postres', value: 'Postres' },
  { label: 'Segundo', value: 'Segundo' },
  { label: 'Vegano', value: 'Vegano' },
  { label: 'Vegatariano', value: 'Vegatariano' },
];

interface Props {
  handleChange: (data: any) => void;
}

const SelectCategory = ({ handleChange }: Props) => {
  const onChange = (values: IOption[]) =>
    handleChange({
      category: values.reduce((acc: string[], el) => {
        acc = [...acc, el.value];
        return acc;
      }, []),
    });

  return (
    <Select
      isMulti
      name='category'
      options={options}
      classNames={{
        control: (state) => 'h-10',
      }}
      classNamePrefix='select'
      placeholder='Categoria'
      onChange={onChange}
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
export default SelectCategory;
