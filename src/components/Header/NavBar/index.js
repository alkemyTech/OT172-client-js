import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from 'store/slices/auth/index'
import { alertToast } from 'services/alerts'
import { links } from 'config/const'
import { navLinkStyles } from '../styles'




export default function NavBar() {

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    alertToast('success', 'Sesión cerrada con exito!')
  }

  return (
    <Container>
      {links.map(link => <NavLink style={navLinkStyles} key={link.path} to={link.path}>{link.name}</NavLink>)}
      <>
      {user ? // IF USER IS LOGGED IN
        (<NavLink style={navLinkStyles} to='/' onClick={onLogout} > Logout </NavLink>)
        :      //  IF NOT 
        (<> 
        <NavLink style={navLinkStyles} to='/login'> Login </NavLink> 
        <NavLink style={navLinkStyles} to='/register' > Register </NavLink>  </>)}
    </>
    </Container>
  )
}
