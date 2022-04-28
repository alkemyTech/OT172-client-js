import React, { useState, useEffect } from 'react'

import { FormikForm } from '../Forms'
import { FormField } from '../Forms/formField'
import { createUserSchema } from '../Forms/schemas'
import { postUserService } from '../../services/apiAuth'
import { FormContainer } from './styles'

const FormFields = response => {
  return (
    <>
      <FormField
        name='firstName'
        type='text'
        placeholder='Nombre'
        FormContainer={FormContainer}
      />
      <FormField
        name='lastName'
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
  const values = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  const [response, setResponse] = useState({ ok: false, msg: '' })

  const handleSubmit = async (values, { resetForm }) => {
    const serviceResponse = await postUserService(values)

    if (serviceResponse === true) {
      setResponse(prevState => ({
        ...prevState,
        ok: true,
        msg: `El usuario ${values.email} fue creado exitosamente`
      }))
      resetForm({ values: '' })
    } else {
      setResponse(prevState => ({
        ...prevState,
        msg: serviceResponse
      }))
    }
  }

  useEffect(() => {
    setTimeout(() => setResponse({ ok: false, msg: '' }), 30000)
  }, [response])

  return (
    <FormikForm
      title='Bienvenid@ a Somos Más'
      subtitle='Desde 1997 generando procesos de crecimiento y de inserción social'
      values={values}
      schema={createUserSchema}
      onSubmit={handleSubmit}
      FormFields={() => FormFields(response.msg)}
    />
  )
}
