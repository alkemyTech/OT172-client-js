import { yupToFormErrors } from 'formik'
import * as Yup from 'yup'

export const createUserSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, 'Solo se admiten letras')
    .min(3, 'El mínimo de caracteres es 3')
    .max(30, 'El máximo de caracteres es 30')
    .required('El nombre es requerido'),
  lastName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, 'Solo se admiten letras')
    .min(2, 'El mínimo de caracteres es 2')
    .max(30, 'El máximo de caracteres es 30')
    .required('El apellido es requerido'),
  email: Yup.string()
    .email('El email ingresado es invalido')
    .max(255)
    .required('El email es requerido'),
  password: Yup.string()
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
      'La contraseña debe tener al menos una letra mayúscula, una minúscula y un número.'
    )
    .min(8, 'El mínimo de caracteres es 8')
    .max(20, 'El máximo de caracteres es 20')
    .required('El campo password no puede estar vacío')
})

export const loginUserSchema= Yup.object().shape({//Schema to verifie login data of user
  email: Yup.string()
    .email('El email ingresado es invalido')
    .max(255)
    .required('El email es requerido'),
  password: Yup.string()
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
      'La contraseña debe tener al menos una letra mayúscula, una minúscula y un número.'
    )
    .min(8, 'El mínimo de caracteres es 8')
    .max(20, 'El máximo de caracteres es 20')
    .required('El campo password no puede estar vacío')
})

export const contactSchema= Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, 'Solo se admiten letras')
    .min(3, 'El mínimo de caracteres es 3')
    .max(30, 'El máximo de caracteres es 30')
    .required('El nombre es requerido'),
  lastName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, 'Solo se admiten letras')
    .min(2, 'El mínimo de caracteres es 2')
    .max(30, 'El máximo de caracteres es 30')
    .required('El apellido es requerido'),
  email: Yup.string()
    .email('El email ingresado es invalido')
    .max(255)
    .required('El email es requerido'),
  message: Yup.string()
    .max(255)
    .required('El mensaje es requerido')
})

