import React from 'react'
import { bool } from 'prop-types'
import { StyledMenu } from './styles'
import { linksBackOffice } from 'config/const'
import { NavLink } from 'react-router-dom'
import { navLinkStyles } from 'components/Header/styles'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from 'store/slices/auth'
import { alertToast } from 'services/alerts'
import { CardLoginOrRegister, CardMenuBackOffice } from 'components/Header/utils/styles'

const Menu = ({ open, ...props }) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    alertToast('success', 'Sesión cerrada con exito!')
    props.setOpen(false)
  }

  const isHidden = !!open
  const tabIndex = isHidden ? 0 : -1
  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      {user?.roleId === 1
        ? (
          <CardMenuBackOffice>
            <h1>BackOffice</h1>
            {
              linksBackOffice.map(link =>
                <NavLink
                  style={navLinkStyles}
                  tabIndex={tabIndex}
                  key={link.path}
                  to={link.path}
                  onClick={() => props.setOpen(false)}
                >
                  {link.name}
                </NavLink>)
            }
          </CardMenuBackOffice>
          )
        : null}
      <CardLoginOrRegister>
        {user // IF USER IS LOGGED IN
          ? (
            <>
              <h1>Perfil</h1>
              <NavLink style={navLinkStyles} to={`/profile/${user.id}`} onClick={() => props.setOpen(false)}> Editar </NavLink>
              <NavLink style={navLinkStyles} to='/' onClick={onLogout}> Salir </NavLink>
            </>
            )
          : (
            <>
              <h1>Ser parte</h1>
              <NavLink style={navLinkStyles} to='/login' onClick={() => props.setOpen(false)}> Entrar </NavLink>
              <span> - O - </span>
              <NavLink style={navLinkStyles} to='/register' onClick={() => props.setOpen(false)}> Registrarse </NavLink>
            </>
            )}
      </CardLoginOrRegister>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired
}

export default Menu
