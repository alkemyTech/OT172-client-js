import React, { useState } from 'react'
import { FormikForm } from '../../Forms'
import { FormField } from 'components/Forms/formField'
import { contactSchema } from 'components/Forms/schemas'
import { FormContainer, CustomTextArea, CustomInput } from './styles'

const FormFields = () => {
  return (
    <>
      <FormField
        name='firstName'
        type='text'
        placeholder='Nombre'
        as={CustomInput}
        FormContainer={FormContainer}
      />
      <FormField
        name='lastName'
        type='text'
        placeholder='Apellido'
        as={CustomInput}
        FormContainer={FormContainer}
      />
      <FormField
        name='email'
        type='email'
        placeholder='Email de contacto'
        as={CustomInput}
        FormContainer={FormContainer}
      />

      <FormField
        name='message'
        type='text'
        as={CustomTextArea}// This sets the field as textarea, //CREAR TEXTAREA CUSTOM Y ENVIARLO
        placeholder='Mensaje para la orgnaizacion'
        FormContainer={FormContainer}
      />
      <button type='submit'>Enviar</button>
    </>
  )
}

export const ContactForm = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const handleSubmit = (values) => {
    console.log(values)
    // Waiting for endpoint for save messages
  }
  return (
    <FormikForm
      title='Bienvenid@ a Somos Más'
      subtitle='Desde 1997 generando procesos de crecimiento y de inserción social'
      operationName='Contactarse con nosotros'
      values={values}
      schema={contactSchema}
      onSubmit={handleSubmit}
      FormFields={() => FormFields()}
    />
  )
}
