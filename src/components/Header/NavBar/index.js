import React from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import { Container, navLinkStyles } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../../store/slices/auth/index'
import { alertToast } from 'services/alerts'
import { links } from 'config/const'




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
      (<> <NavLink style={navLinkStyles} to='/login'> Login </NavLink> <NavLink style={navLinkStyles} to='/register'> Register </NavLink>  </>)}

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
