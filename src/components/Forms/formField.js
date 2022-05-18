import React, { useEffect } from 'react'
import { Field, ErrorMessage, useFormikContext } from 'formik'
import { CustomInput, CustomInputImage, ErrorContainer } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCategories } from 'store/slices/categories'

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

export const ImageField = ({ name, type, placeholder, FormContainer = CustomInputImage, as }) => {
  const { setFieldValue } = useFormikContext();
  return (
    <FormContainer >
      <Field
        as={as}
        name={name}
        type={type}
        placeholder={placeholder}
        value={undefined}
        onChange={(e) => { setFieldValue(name, e.target.files[0]) }}
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

export const CategorySelectField= ({ name, type, placeholder, FormContainer}) => {
  const {categories} = useSelector(state => state.categories)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchAllCategories())
  },[dispatch])
  return (
    <FormContainer >
      <Field 
        name={name} 
        type={type} 
        placeholder={placeholder} 
        component={"select"}
      > 
        <option key={-1} value='' disabled>Selecicone una categoria</option>
        {categories?.map((categorie,index)=><option key={categorie.id} value={categorie.id}>{categorie.name}</option>)}
      </Field>
      <ErrorMessage name={name}>
        {msg=><ErrorMessage>{msg}</ErrorMessage> }
      </ErrorMessage> 
    </FormContainer>
  )
}

