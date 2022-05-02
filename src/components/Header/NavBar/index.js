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
      {user ? // IF USER IS LOGGED IN
      (<> <button onClick={onLogout}>Logout</button>  </>) 
      :      //  IF NOT 
      (<> <Link to='/login'> Login </Link> <Link to='/register'> Register </Link>  </>)}


      {/*  BACKOFFICE */}
      {user?.user?.roleId === 1 ?  // IF USER IS ADMIN
       <Link to='/backoffice/categories'> Categories </Link> 
       : null                 // IF NOT 
        }
        
    </Container>
  )
}
