import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { deleteUser, reset } from 'store/slices/users'
import { alertToast } from 'services/alerts'
import { useNavigate } from 'react-router-dom'
import { Container, EditFrom } from './styles'
 

const Profile = () => {
    const {user} = useSelector((state) => state.auth)
    const {firstName, lastName, email, id} = user || {firstName: '', lastName: '', email: '', id: 0}
    const {isLoading, isError, isSuccess, message} = useSelector((state)=> state.users)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelete = (id)=>{
      dispatch(deleteUser(id))
    }

    useEffect(() => {
      if(isError){
          alertToast('error',message)
      }
      if(isSuccess){
          alertToast('success','Edición exitosa!')
      }
      if(!user){
        navigate('/login')
      }
      dispatch(reset())
  }, [user, isError, isSuccess, message])

  const renderForm= ()=>{
    const form = document.getElementById('form')
    const btn = document.getElementById('editBtn')
    form.style.display = 'flex'
    form.style.flexDirection = 'column'
    btn.style.display = 'none'
  }
  const closeForm= ()=>{
    const form = document.getElementById('form')
    const btn = document.getElementById('editBtn')
    form.style.display = 'none'
    btn.style.display = 'block'
  }

  return (
    <Container>
        <h2>Profile</h2>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{email}</p>
        <EditFrom id='form'>
          <input></input>
          <input></input>
          <input></input>
          <button onClick={()=>{closeForm()}}>Save changes</button>
        </EditFrom>
        <button id='editBtn' onClick={()=>{renderForm()}}>Edit Profile</button>
        <button onClick={()=>{handleDelete(id)}}>Delete account</button>
    </Container>
  )
}

export default Profile