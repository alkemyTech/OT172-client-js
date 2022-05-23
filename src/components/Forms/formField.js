import React, { useEffect, useState } from 'react'
import { Field, ErrorMessage, useFormikContext } from 'formik'
import { CustomInput, CustomInputImage, ErrorContainer } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCategories } from 'store/slices/categories'

export const FormField = ({ name, type, placeholder, FormContainer = CustomInput, as }) => {
  return (
    <FormContainer error>
      <Field as={as} name={name} type={type} placeholder={placeholder} />
      <ErrorContainer>
        <ErrorMessage
          component='p'
          name={name}
        />
      </ErrorContainer>
    </FormContainer>
  )
}

export const ImageField = ({ name, type, placeholder, FormContainer = CustomInputImage, as }) => {
  const { setFieldValue } = useFormikContext()
  const [actualImageName, setActualImageName] = useState('')
  const subirImage = (e) => {
    setFieldValue(name, e.target.files[0])
    setActualImageName(e.target.files[0].name)
  }
  return (
    <FormContainer>
      <div className='image-container'>
      <Field
        as={as}
        name={name}
        type={type}
        placeholder={placeholder}
        value={undefined}
        onChange={(e) => { subirImage(e) }}
      />
        <span>{actualImageName}</span>
        </div>
      <ErrorContainer>
        <ErrorMessage
          component='p'
          name={name}
        />
      </ErrorContainer>
    </FormContainer>
  )
}

export const CategorySelectField = ({ name, type, placeholder, FormContainer = CustomInput }) => {
  const { categories } = useSelector(state => state.categories)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllCategories())
  }, [dispatch])
  return (
    <FormContainer>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        component='select'
      >
        <option key={-1} value='' disabled>Selecicone una categoria</option>
        {categories?.map((categorie, index) => <option key={categorie.id} value={categorie.id}>{categorie.name}</option>)}
      </Field>
      <ErrorContainer>
        <ErrorMessage
          component='p'
          name={name}
        />
      </ErrorContainer>
    </FormContainer>
  )
}

export const RoleSelectField = ({ name, type, placeholder, FormContainer = CustomInput }) => {
  // const {roles} = useSelector(state => state.categories)
  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(fetchAllCategories())
  // },[dispatch])

  const roles = [
    {
      name: 'Admin',
      id: 1
    },
    {
      name: 'Standard',
      id: 2
    }
  ]
  return (
    <FormContainer>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        component='select'
      >
        <option key={-1} value='' disabled>Selecicone un rol</option>
        {roles?.map((rol, index) => <option key={rol.id} value={rol.id}>{rol.name}</option>)}
      </Field>
      <ErrorMessage name={name}>
        {msg => <ErrorMessage>{msg}</ErrorMessage>}
      </ErrorMessage>
    </FormContainer>
  )
}
