import React, { useEffect, useState } from 'react'
import { FormikForm } from 'components/Forms'
import { CustomInput, FormContainer } from './styles'
import { newsSchema, createUserSchema } from 'components/Forms/schemas'
import { FormField, ImageField } from 'components/Forms/formField'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import CKEditor from 'components/Forms/CKEditor/CreateCKEditor'
import { getService } from 'services/apiService'
import { ENDPOINT_NEWS } from 'services/settings'
import { alertToast } from 'services/alerts'
import { createNews, updateNews } from 'store/slices/news'
import { useFormikContext } from 'formik'


const FormFields = response => {
    return (
      <>
        <FormField
          name='name'
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
        name: '',
        image: '',
        category: '',
        content: ''
      }*/


    const [values, setValues]= useState({
      name: '',
      image: '',
      category: '',
      content: ''
    })

    useEffect(()=>{
      (async() =>{
        if(params.id){
          const response = await getService(ENDPOINT_NEWS, params.id)
          const { name, image, category, content }= response.data

          setValues({
            name,
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
         dispatch(updateNews({...values, id:params.id}))
       }else{
         //console.log(values)
         dispatch(createNews(values))
       }

       if(isSuccess) alertToast("success", params.id?'Novedad editada correctamente!':"Novedad agregada correctamente!")
       if(isError) alertToast("error", message)
       actions.setSubmitting(false)
       //actions.resetForm()
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