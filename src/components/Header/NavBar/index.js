import React from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import { Container, navLinkStyles } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../../store/slices/auth/index'
import { alertToast } from 'services/alerts'

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
    name: 'Activities',
    path: 'activities'
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
  alertToast('success','Sesión cerrada con exito!')
}



  return (
    <Container>
      {links.map(link => <NavLink style={navLinkStyles} key={link.path} to={link.path}>{link.name}</NavLink>)}
      {user ? // IF USER IS LOGGED IN
      (<> <button onClick={onLogout}>Logout</button>  </>) 
      :      //  IF NOT 
      (<> <Link to='/login'> Login </Link> <Link to='/register'> Register </Link>  </>)}

      {/*  BACKOFFICE */}
      {user?.user?.roleId === 1 ?  // IF USER IS ADMIN
       <>
        <NavLink style={navLinkStyles} to='/backoffice/users'> Users </NavLink> 
        <NavLink style={navLinkStyles} to='/backoffice/categories'> Categories </NavLink> 
        <NavLink style={navLinkStyles} to='/backoffice/activities'> Activities </NavLink> 
      </>
       : null                 // IF NOT 
        }
        
    </Container>
  )
}
