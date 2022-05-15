import React from 'react'
import { Field, ErrorMessage, useFormikContext } from 'formik'
import { CustomInput, ErrorMessageFormik } from './styles'

export const FormField = ({ name, type, placeholder, FormContainer=CustomInput, as}) => {
  const { values, submitForm, setFieldValue} = useFormikContext();
  return (
    <FormContainer >
      <Field as= {as} name={name} type={type} placeholder={placeholder}/>
      <ErrorMessage name={name}>
        {msg=><ErrorMessageFormik>{msg}</ErrorMessageFormik> }
      </ErrorMessage> 
    </FormContainer>
  )
}

export const ImageField = ({ name, type, placeholder, FormContainer, as}) => {
  const { setFieldValue} = useFormikContext();
  return (
    <FormContainer >
      <Field 
        as= {as} 
        name={name} 
        type={type} 
        placeholder={placeholder} 
        value={undefined}
        onChange={(e)=>{ setFieldValue("image",e.target.files[0]) }}
      />

      <ErrorMessage name={name}>
        {msg=><ErrorMessageFormik>{msg}</ErrorMessageFormik> }
      </ErrorMessage> 
    </FormContainer>
  )
}

