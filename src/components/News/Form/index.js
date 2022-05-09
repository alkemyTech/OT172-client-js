import React, { useEffect, useState } from 'react'
import { FormikForm } from 'components/Forms'
import { CustomInput, FormContainer } from './styles'
import { newsSchema } from 'components/Forms/schemas'
import { FormField, ImageField } from 'components/Forms/formField'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import CKEditor from 'components/Forms/CKEditor/CreateCKEditor'
import { getService } from 'services/apiService'
import { ENDPOINT_NEWS } from 'services/settings'
import { alertToast } from 'services/alerts'


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
        <FormField
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
 
  /*export const Test = () => {
      const { values, setFieldValue } = useFormikContext();
    
      React.useEffect(() => {
        console.log(values)
      
      }, [values, setFieldValue]);
      return null;
  }*/
  
  export const NewsForm = () =>{
    const {isLoading, isError, isSuccess, message} = useSelector((state) => state.auth) 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params= useParams()
    /*const values = {
        title: '',
        image: '',
        category: '',
        content: ''
      }*/


    const [values, setValues]= useState({
      title: '',
      image: '',
      category: '',
      content: ''
    })

    useEffect(()=>{
      (async() =>{
        if(params.id){
          const response = await getService(ENDPOINT_NEWS, params.id)
          const { title, image, category, content }= response.data

          setValues({
            title,
            image,
            category,
            content
          })
        }
      })()
    },[params.id, getService])

    //Send form
    const handleSubmit = (values, actions) => {
       if(params.id){
         dispatch(updateNew({...values, id:params.id}))
       }else{
         dispatch(createNew(values))
       }

       if(isSuccess) alertToast("success", params.id?'Novedad editada correctamente!':"Novedad agregada correctamente!")
       if(isError) alertToast("error", message)
       actions.setSubmitting(false)
       actions.resetForm()
       //navigate("/news")
    }
    
    return(
          <FormikForm
            title='FORMULARIO NOVEDADES'
            values={values}
            schema={newsSchema}
            onSubmit={handleSubmit}
            FormFields={() => FormFields()}
            
            />
        )
  }