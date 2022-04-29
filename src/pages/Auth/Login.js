import React, { useState, useEffect } from 'react'

import { createUserSchema } from '../../components/Forms/schemas'
import { FormContainer } from './styles'
import { FormikForm } from '../../components/Forms'
import { FormField } from '../../components/Forms/formField'

const FormFields = response => {
    return (
      <>
       
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


function Login() {
const [formData,setFormData] = useState({
    email: '',
    password: ''
})


const { email, password} = formData

const onChange = (e) => {
setFormData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value
}))
}

const onSubmit = (e) => {
    e.preventDefault()
}

  return (
   <>
   <section className='heading'>
<h1>
    Login
</h1>
<p>Log in and enjoy the web</p>
   </section>
   <section>
   <FormikForm
      title='Bienvenid@ a Somos Más'
      subtitle='Desde 1997 generando procesos de crecimiento y de inserción social'
      values={formData}
      schema={createUserSchema}
    onChange={onChange}
    onSubmit={onSubmit}
      FormFields={() => FormFields()}
    />
   </section>
   </>
  )
}

export default Login