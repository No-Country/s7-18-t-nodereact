import * as yup from 'yup';

export const schemaLogin = yup
  .object({
    email: yup
      .string()
      .required('El correo electrónico es requerido')
      .email('Debe ser un correo electrónico válido')
      .trim(),
    password: yup.string().required('La contraseña es requerida').trim(),
  })
  .required();

export const schemaRegister = yup
  .object({
    name: yup.string().required('El nombre es requerido').trim(),
    email: yup
      .string()
      .required('El correo electrónico es requerido')
      .email('Debe ser un correo electrónico válido')
      .trim(),
    password: yup.string().required('La contraseña es requerida').trim(),
  })
  .required();
