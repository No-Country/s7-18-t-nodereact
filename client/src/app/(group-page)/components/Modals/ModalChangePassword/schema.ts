import * as yup from 'yup';

export const schema = yup
  .object({
    password: yup.string().required('La contraseña es requerida').trim(),
    newPassword: yup.string().required('La nueva contraseña es requerida').trim(),
    repeatPassword: yup.string().oneOf([yup.ref('newPassword')], 'Las contraseñas deben coincidir'),
  })
  .required();
