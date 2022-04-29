import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../../store/slices/auth/index'
import { toast } from 'react-toastify'



const links = [
  {
    name: 'Home',
    path: 'home'
  },
  {
    name: 'News',
    path: 'news'
  },
  {
    name: 'Testimonials',
    path: 'testimonials'
  },
  {
    name: 'Members',
    path: 'members'
  },
  {
    name: 'Categories',
    path: 'backoffice/categories'
  }
]

export default function NavBar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

const onLogout = () => {
  dispatch(logout())
  dispatch(reset())
  navigate('/')
  toast.success('Logout success')
}

  return (
    <Container>
      {links.map(link => <Link key={link.path} to={link.path}>{link.name}</Link>)}
      {user ? (<> <button onClick={onLogout}>Logout</button>  </>) : (<> <Link to='/login'> Login </Link> <Link to='/register'> Register </Link>  </>)}
    </Container>
  )
}
