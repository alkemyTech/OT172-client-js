import React, { useEffect, useState } from 'react'
import { FormField, ImageField } from "components/Forms/formField"
import { Button, Container} from "components/Forms/styles"
import { ENDPOINT_PUBLIC } from "services/settings"
import { getOrganizationData, updateOrganization } from "store/slices/organization"
import { CustomInput } from './styiles'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { getService } from 'services/apiService'
import { alertToast } from 'services/alerts'
import Loader from 'components/utils/Loader'
import { TiArrowBack } from "react-icons/ti";
import { FormikForm } from 'components/Forms'
import { organizationSchema } from 'components/Forms/schemas'
import store from 'store'

const FormFields = (editar=false, temp) => {
    return (
      <>
        <FormField
          name='name'
          type='text'
          placeholder='Nombre de la organizacion'
        />
        <ImageField
          name='image'
          type='file'
          placeholder='Logo de la organizacion'
          as= {CustomInput}
        />
        <Button type="submit">Editar</Button>
       
      </>
    ) 
  }

  export const EditOrganizationForm = () =>{
    const {isLoading, isError, isSuccess, message, list} = useSelector((state) => state.organization) 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params= useParams()
 
    const [values, setValues]= useState({
      name: '',
      image: '',
    })

    useEffect(()=>{
      (async() =>{
        if(list.id){
          const response = await getService(ENDPOINT_PUBLIC, list.id)
          const { name, image }= response.data
          setValues({
            name,
            image:image
          })
        }else{
          navigate("/home")
        }
      })()
    },[list.id, dispatch])

    //Send form
    const handleSubmit = async (values, actions) => {
      await dispatch(updateOrganization({...values, id:list.id}))
      if(isSuccess) alertToast("success", 'Informacion de la organizacion editada correctamente!')
      if(isError) alertToast("error", message)
      navigate("/home")
    }
    
    if(isLoading) return <Loader />
    return(
        <Container>
          <Link to={`/home`}><TiArrowBack /> Volver a inicio</Link>
          <FormikForm
            title='Back Office'
            subtitle= 'Administracion de la organizacion'
            operationName= {'Editar nombre y logo'}
            values={values}
            schema={organizationSchema}
            onSubmit={handleSubmit}
            FormFields={() => FormFields(true, values)}
            
            />
        </Container>
        )
        
  }