import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createUserSchema } from '../../components/Forms/schemas'
import { FormContainer } from './styles'
import { FormikForm } from '../../components/Forms'
import { FormField } from '../../components/Forms/formField'
import { register, reset } from '../../store/slices/auth/index'

// const FormFields = response => {
//     return (
//       <>
//         <FormField
//           name='firstName'
//           type='text'
//           placeholder='Nombre'
//           value={firstName}
//           FormContainer={FormContainer}
//           onChange={onChange}
//         />
//         <FormField
//           name='lastName'
//           type='text'
//           placeholder='Apellido'
//           FormContainer={FormContainer}
//           onChange={onChange}
//         />
//         <FormField
//           name='email'
//           type='email'
//           placeholder='Email'
//           FormContainer={FormContainer}
//           onChange={onChange}
//         />
//         <FormField
//           name='password'
//           type='password'
//           placeholder='Contraseña'
//           FormContainer={FormContainer}
//           onChange={onChange}
//         />
//         <button type='submit'>Crear</button>
//         <div> {response} </div>
//       </>
//     )
//   }

function Register() {
    
    
const [formData,setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
})


const {firstName, lastName, email, password} = formData

const navigate = useNavigate()
const dispatch = useDispatch()

const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth) 

useEffect(() => {
if(isError){
    toast.error(message)
}
if(isSuccess || user){
  toast.success('Register success')
   navigate('/home')
}
dispatch(reset())
}, [user, isError, isSuccess, message, navigate, dispatch])


const onChange = (e) => {
    const {name, value} = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
    
  
const onSubmit = (e) => {
    e.preventDefault()
    const userData = {
        firstName, lastName, email, password
    }
    setFormData((prevState) => ({
        ...prevState,
    }))
    console.log(userData)
    dispatch(register(userData))
}

if(isLoading) {
    return <div>IS LOADING ...</div>
}

  return (
   <>
   <section className='heading'>
<h1>
    Register
</h1>
<p>Please create an account</p>
   </section>
   <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='firstName'
              name='firstName'
              value={firstName}
              placeholder='Enter your firstName'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='lastName'
              className='form-control'
              id='lastName'
              name='lastName'
              value={lastName}
              placeholder='Enter your lastName'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
   
   </>
  )
}

export default Register