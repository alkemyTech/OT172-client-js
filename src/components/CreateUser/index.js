import React, { useState, useEffect } from 'react'

import { FormikForm } from '../Forms'
import { FormField } from '../Forms/formField'
import { createUserSchema } from '../Forms/schemas'
import { postUserService } from '../../services/apiAuth'
import { FormContainer } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../store/slices/users'
import { register, reset } from '../../store/slices/auth/index'
import { alertToast } from 'services/alerts'
import { useNavigate } from 'react-router-dom'

const FormFields = response => {
  return (
    <>
      <FormField
        name='firstName'
        type='text'
        placeholder='Nombre'
        FormContainer={FormContainer}
      />
      <FormField
        name='lastName'
        type='text'
        placeholder='Apellido'
        FormContainer={FormContainer}
      />
      <FormField
        name='email'
        type='email'
        placeholder='Email'
        FormContainer={FormContainer}
      />
      <FormField
        name='password'
        type='password'
        placeholder='Contraseña'
        FormContainer={FormContainer}
      />
      <button type='submit'>Crear</button>
      <div> {response} </div>
    </>
  )
}

export const CreateUserForm = () => {
const dispatch = useDispatch()
const { users } = useSelector(state => state.categories)
const [response, setResponse] = useState({ ok: false, msg: '' })

  const values = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  const navigate = useNavigate()
  
  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth) 
  
  useEffect(() => {
  if(isError){
    alertToast('error',message)
  }
  if(isSuccess || user){
    alertToast('success','Registro con exito!')
    navigate('/home')
  }
  dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])
  


  const handleSubmit = async (values, { resetForm }) => {
    console.log(values)
    dispatch(register(values))
    /*const serviceResponse = await postUserService(values)

    if (serviceResponse === true) {
      addUser(prevState => ({
        ...prevState,
              }))
              setResponse(prevState => ({
                ...prevState,
                ok: true,
                msg: `El usuario ${values.email} fue creado exitosamente`
              }))
      resetForm({ values: '' })
    } else {
      setResponse(prevState => ({
        ...prevState,
        msg: serviceResponse
      }))
      addUser(prevState => ({
        ...prevState,
      }))
    }*/
  }

  /*useEffect(() => {
    dispatch(addUser())
  }, [dispatch])*/

  return (
    <FormikForm
      title='Bienvenid@ a Somos Más'
      subtitle='Desde 1997 generando procesos de crecimiento y de inserción social'
      values={values}
      schema={createUserSchema}
      onSubmit={handleSubmit}
      FormFields={() => FormFields(response.msg)}
    />
  )
}
