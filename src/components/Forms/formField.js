import React, { useEffect } from 'react'
import { Field, ErrorMessage, useFormikContext } from 'formik'
import { ErrorMessageFormik } from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllActivities } from 'store/slices/activities';
import { fetchAllCategories } from 'store/slices/categories';
export const FormField = ({ name, type, placeholder, FormContainer, as}) => {
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
        {msg=><ErrorMessageFormik>{msg}</ErrorMessageFormik> }
      </ErrorMessage> 
    </FormContainer>
  )
}

