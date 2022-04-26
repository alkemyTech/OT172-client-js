import React from 'react'
import { Field, ErrorMessage } from 'formik'

export const FormField = ({ name, type, placeholder, FormContainer }) => {
  return (
    <FormContainer>
      <Field name={name} type={type} placeholder={placeholder} />
      <ErrorMessage name={name} />
    </FormContainer>
  )
}
