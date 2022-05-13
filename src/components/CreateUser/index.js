import React, { useEffect } from 'react'
import { FormikForm } from '../Forms'
import { FormField } from '../Forms/formField'
import { createUserSchema } from '../Forms/schemas'
import { FormContainer } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../../store/slices/auth/index'
import { alertToast } from 'services/alerts'
import { useNavigate } from 'react-router-dom'
import { Form } from 'formik'
import { getDefaultNormalizer } from '@testing-library/react'
import { ENDPOINT_MAIL } from 'services/settings'
import axios from 'axios'

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
  const navigate = useNavigate()
  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth) 
  const values = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey('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')

  const onComplete = async (values) => {
    const message = {
      to: values.email,
      from: 'n9746ab@gmail',
      subject: 'Registro',
      text:"Registro completado",
      html: '<><p>Registro completado, felicitaciones! </p></>'
    }
    await axios.post(ENDPOINT_MAIL, message)
    .then(() => {
      console.log('Email send')
    }).catch((err) => {
      console.error(err.message)
    })
  }




  //Register req
  const handleSubmit = values => {
    console.log(values)
    dispatch(register(values))
    onComplete(values)
  }

  //Effects/notifications 
  useEffect(() => {
    if(isError){
      alertToast('error',message)
    }
    if(isSuccess || user){
      alertToast('success','Registrado exitosamente!')
      navigate('/home')
    }
    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  

  /*if(isLoading) {
      //Loading screen, check preserve the state of the fields for not write all again after re-render
  }*/

  return (
    <FormikForm
      title='Bienvenid@ a Somos Más'
      subtitle='Desde 1997 generando procesos de crecimiento y de inserción social'
      values={values}
      schema={createUserSchema}
      onSubmit={handleSubmit}
      FormFields={() => FormFields()}
    />
  )
}
