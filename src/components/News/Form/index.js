import React, { useEffect, useState } from 'react'
import { FormikForm } from 'components/Forms'
import { newsSchema, createUserSchema } from 'components/Forms/schemas'
import { CategorySelectField, FormField, ImageField } from 'components/Forms/formField'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CKEditor from 'components/Forms/CKEditor/CreateCKEditor'
import { getService } from 'services/apiService'
import { ENDPOINT_NEWS } from 'services/settings'
import { alertToast } from 'services/alerts'
import { createNews, updateNews } from 'store/slices/news'
import {CustomInput, FormContainer, FormContainerCKE } from "./styles";
import { TiArrowBack } from "react-icons/ti";
import Loader from 'components/utils/Loader'
import { Button, Container } from "components/Forms/styles";


const FormFields = (editar=false, temp) => {
    return (
      <>
        <FormField
          name='name'
          type='text'
          placeholder='Titulo de la novedad'
        />
        <ImageField
          name='image'
          type='file'
          placeholder='Foto de la novedad'
          as= {CustomInput}
        />
        <CategorySelectField
          name='categoryId'
          type='text'
          placeholder='Categoria'
          FormContainer={FormContainer}
          value={temp.categoryId}
        />
        <FormField
          name='content'
          type='text'
          placeholder='Contenido de la categoria'
          FormContainer={FormContainerCKE}
          as ={CKEditor}
        /> 
        <Button type="submit">{editar ? 'Editar' : 'Agregar'}</Button>
       
      </>
    ) 
  }
  
  export const NewsForm = () =>{
    const {isLoading, isError, isSuccess, message} = useSelector((state) => state.news) 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params= useParams()

    const [values, setValues]= useState({
      name: '',
      image: '',
      categoryId: '',
      content: ''
    })

    useEffect(()=>{
      (async() =>{
        if(params.id){
          const response = await getService(ENDPOINT_NEWS, params.id)
          const { name, image, categoryId, content }= response.data
          setValues({
            name,
            image,
            categoryId,
            content
          })
        }
      })()
    },[params.id, dispatch])

    //Send form
    const handleSubmit = async (values, actions) => {
       if(params.id){
         await dispatch(updateNews({...values, id:params.id}))
       }else{
         await dispatch(createNews(values))
       }

      if(isSuccess) alertToast("success", params.id?'Novedad editada correctamente!':"Novedad agregada correctamente!")
      if(isError) alertToast("error", message)
      navigate("/backoffice/news")

    }
    
    if(isLoading) return <Loader />
    return(
        <Container>
          <Link to={`/backoffice/news`}><TiArrowBack /> Volver a news</Link>
          <FormikForm
            title='Back Office'
            subtitle= 'Administracion de novedades'
            operationName= {params.id ? 'Editar' : 'Agregar'}
            values={values}
            schema={newsSchema}
            onSubmit={handleSubmit}
            FormFields={() => FormFields(params.id ? true : false, values)}
            
            />
        </Container>
        )
        
  }