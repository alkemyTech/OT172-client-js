import React, { useState, useEffect } from 'react'

import { createUserSchema } from '../../components/Forms/schemas'
import { FormContainer } from './styles'
import { FormikForm } from '../../components/Forms'
import { FormField } from '../../components/Forms/formField'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../../store/slices/auth/index'


function Login() {
const [formData,setFormData] = useState({
    email: '',
    password: ''
})

const navigate = useNavigate()
const dispatch = useDispatch()

const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth) 

const { email, password} = formData

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
      email, password
  }
  setFormData((prevState) => ({
      ...prevState,
  }))
  
  console.log(userData)
  dispatch(login(userData))
}

useEffect(() => {
  if(isError){
      toast.error(message)
  }
  if(isSuccess || user){
  toast.success('Login success')
     navigate('/home')

  }
  dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])
  
  if(isLoading) {
    return <div>IS LOADING ...</div>
}

  return (
    <>
    <section className='heading'>
 <h1>
     Login
 </h1>
 <p>Please login with your account</p>
    </section>
    <section className='form'>
         <form onSubmit={onSubmit}>
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

export default Login