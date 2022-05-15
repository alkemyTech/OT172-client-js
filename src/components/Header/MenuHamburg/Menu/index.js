import React from 'react';
import { bool } from 'prop-types';
import { CardLoginOrRegister, StyledMenu } from './styles';
import { links } from 'config/const';
import { NavLink } from 'react-router-dom';
import { navLinkStyles } from 'components/Header/styles';
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from 'store/slices/auth';
import { alertToast } from 'services/alerts';

const Menu = ({ open, ...props }) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    alertToast('success', 'Sesión cerrada con exito!')
    props.setOpen(false)
  }

  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      {links.map(link => <NavLink style={navLinkStyles} tabIndex={tabIndex} key={link.path} to={link.path} onClick={() => props.setOpen(false)}>
        {link.name}
      </NavLink>)}
      {user ? // IF USER IS LOGGED IN
        (<NavLink style={navLinkStyles} to='/' onClick={onLogout} > Logout </NavLink>)
        :      //  IF NOT 
        (
          <CardLoginOrRegister>
            <NavLink style={navLinkStyles} to='/login' onClick={() => props.setOpen(false)}> Login </NavLink>
            <span> - O - </span>
            <NavLink style={navLinkStyles} to='/register' onClick={() => props.setOpen(false)}> Register </NavLink>
          </CardLoginOrRegister>
        )}

    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
