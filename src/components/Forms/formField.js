import React from 'react'
import { Field, ErrorMessage } from 'formik'
import { ErrorMessageFormik } from './styles'
export const FormField = ({ name, type, placeholder, FormContainer, as, onChange,value}) => {
  return (
    <FormContainer >
      <Field as= {as} name={name} type={type} placeholder={placeholder} onChange={onChange} value={value}/>
      <ErrorMessage name={name}>
        {msg=><ErrorMessageFormik>{msg}</ErrorMessageFormik> }
      </ErrorMessage> 
    </FormContainer>
  )
}
