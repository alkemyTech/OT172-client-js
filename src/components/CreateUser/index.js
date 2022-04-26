import React, { useState } from 'react'

import { FormikForm } from '../Forms'
import { FormField } from '../Forms/formField'
import { createUserSchema } from '../Forms/schemas'
import { FormContainer } from './styles'

const FormFields = response => {
  return (
    <>
      <FormField
        name='firstname'
        type='text'
        placeholder='Nombre'
        FormContainer={FormContainer}
      />
      <FormField
        name='lastname'
        type='text'
        placeholder='Apellido'
        FormContainer={FormContainer}
      />
      <FormField
        name='email'
        type='email'
        placeholder='Email'
        FormContainer={FormContainer}
      />
      <FormField
        name='password'
        type='password'
        placeholder='Contraseña'
        FormContainer={FormContainer}
      />
      <button type='submit'>Crear</button>
      <div> {response} </div>
    </>
  )
}

export const CreateUserForm = () => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })
  const [response, setResponse] = useState()

  const handleSubmit = values => {
    console.log('Submitting', values)
  }

  return (
    <FormikForm
      title='Bienvenid@ a Somos Más'
      subtitle='Desde 1997 generando procesos de crecimiento y de inserción social'
      values={values}
      schema={createUserSchema}
      onSubmit={handleSubmit}
      FormFields={() => FormFields(response)}
    />
  )
}
