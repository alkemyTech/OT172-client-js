import React, { useEffect } from 'react'
import { FormikForm } from 'components/Forms'
import { FormContainer } from './styles'
import { createUserSchema } from 'components/Forms/schemas'
import { FormField } from 'components/Forms/formField'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const FormFields = response => {
    return (
      <>
        <FormField
          name='title'
          type='text'
          placeholder='Titulo de la novedad'
          FormContainer={FormContainer}
        />
        <FormField
          name='photo'
          type='file'
          placeholder='Foto de la novedad'
          FormContainer={FormContainer}
        />
        <FormField
          name='content'
          type='text'
          placeholder='Ingrese el contenido de la novedad'
          FormContainer={FormContainer}
        />
        <FormField
          name='category'
          type='select'
          placeholder='Categoria'
          FormContainer={FormContainer}
        />
        <button type='submit'>Crear</button>
        <div> {response} </div>
      </>
    ) 
  }

  export const NewsForm = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth) 
    
    const values = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }  

    //Send form
    const handleSubmit = values => {
        console.log("SUBMIT!")
    }
    return(
          <FormikForm
            title='FORMULARIO NOVEDADES'
            values={values}
            schema={createUserSchema}
            onSubmit={handleSubmit}
            FormFields={() => FormFields()}
            />
        )
  }