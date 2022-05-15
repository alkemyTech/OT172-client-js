import React from 'react'
import { Field, ErrorMessage, useFormikContext } from 'formik'
import { CustomInput, ErrorContainer } from './styles'

export const FormField = ({ name, type, placeholder, FormContainer = CustomInput, as }) => {
  return (
    <FormContainer error={true}>
      <Field as={as} name={name} type={type} placeholder={placeholder} />
      <ErrorContainer>
        <ErrorMessage
          component="p"
          name={name}
        />
      </ErrorContainer>
    </FormContainer>
  )
}

export const ImageField = ({ name, type, placeholder, FormContainer, as }) => {
  const { setFieldValue } = useFormikContext();
  return (
    <FormContainer >
      <Field
        as={as}
        name={name}
        type={type}
        placeholder={placeholder}
        value={undefined}
        onChange={(e) => { setFieldValue("image", e.target.files[0]) }}
      />
      <ErrorContainer>
        <ErrorMessage
          component="p"
          name={name}
        />
      </ErrorContainer>
    </FormContainer>
  )
}

