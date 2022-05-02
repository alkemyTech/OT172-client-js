import React, { useState, useEffect } from 'react'

import { FormikForm } from '../Forms'
import { FormField } from '../Forms/formField'
import { createUserSchema } from '../Forms/schemas'
import { postUserService } from '../../services/apiAuth'
import { FormContainer } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../store/slices/users'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../../store/slices/auth/index'
import { alertToast } from 'services/alerts'

export const CreateUserForm = () => {
  const [formData,setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const FormFields = () => {
    return (
      <>
        <FormField
          name='firstName'
          type='text'
          placeholder='Nombre'
          FormContainer={FormContainer}
          value={formData.firstName}
          onChange={(e)=>{
            console.log(e.currentTarget)
            handleChange(e)
          }}

        />
        <FormField
          name='lastName'
          type='text'
          placeholder='Apellido'
          FormContainer={FormContainer}
          onChange={handleChange}
        />
        <FormField
          name='email'
          type='email'
          placeholder='Email'
          FormContainer={FormContainer}
          onChange={handleChange}
        />
        <FormField
          name='password'
          type='password'
          placeholder='Contraseña'
          FormContainer={FormContainer}
          onChange={handleChange}
        />
        <button type='submit'>Crear</button>
      
      </>
    )
  }

  function handleChange(e) {
    const {name, value} = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  /*
  const dispatch = useDispatch()
  const { users } = useSelector(state => state.categories)
  const [response, setResponse] = useState({ ok: false, msg: '' })

  const values = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  const handleSubmit = async (values, { resetForm }) => {
   
    const serviceResponse = await postUserService(values)

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
    }
  }*/
  /*
  useEffect(() => {
    dispatch(addUser())
  }, [dispatch])*/



  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth) 

  const { firstName,lastName, email, password} = formData


  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const userData = {
        firstName,lastName,email, password
    }
    console.log("userData")
    setFormData((prevState) => ({
        ...prevState,
    }))
    
    console.log(userData)
    dispatch(login(userData))
  }

  useEffect(() => {
    if(isError){
      alertToast('error',message)
    }
    if(isSuccess || user){
      alertToast('success','Login success')
      navigate('/home')

    }
    dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])
    
    if(isLoading) {
      return <div>IS LOADING ...</div>
    }
    
  return (
    <FormikForm
      title='Bienvenid@ a Somos Más'
      subtitle='Desde 1997 generando procesos de crecimiento y de inserción social'
      values={formData}
      schema={createUserSchema}
      onSubmit={handleSubmit}
      FormFields={() => FormFields()}
    />
  )
}
