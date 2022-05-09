import React, { useEffect } from 'react'
import { FormikForm } from 'components/Forms'
import { CustomInput, FormContainer } from './styles'
import { newsSchema } from 'components/Forms/schemas'
import { CKEditorField, FormField, ImageField } from 'components/Forms/formField'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CKEditor from 'components/Forms/CKEditor/CreateCKEditor'
import { useFormikContext } from 'formik'


const FormFields = response => {
    return (
      <>
        <FormField
          name='title'
          type='text'
          placeholder='Titulo de la novedad'
          FormContainer={FormContainer}
        />
        <ImageField
          name='image'
          type='file'
          placeholder='Foto de la novedad'
          FormContainer={FormContainer}
          as= {CustomInput}
        />
        <FormField
          name='category'
          type='text'
          placeholder='Categoria'
          FormContainer={FormContainer}
        />
        <CKEditorField
          name='content'
          type='text'
          placeholder='Contenido de la categoria'
          FormContainer={FormContainer}
          as ={CKEditor}
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
        title: '',
        image: "",
        category: '',
        content: ''
      }

    //Send form
    const handleSubmit = values => {
        console.log(values)
    }


    const Test = () => {
      const { values, setFieldValue } = useFormikContext();
    
      React.useEffect(() => {
        console.log(values)
      }, [values, setFieldValue]);
      return null;
    }
    
    return(
          <FormikForm
            title='FORMULARIO NOVEDADES'
            values={values}
            schema={newsSchema}
            onSubmit={handleSubmit}
            FormFields={() => FormFields()}
            Test={Test}
            />
        )
  }