import React from 'react';
import { bool } from 'prop-types';
import { navLinkStyles, StyledMenu } from './Menu.styled';
import { links } from 'config/const';
import { NavLink } from 'react-router-dom';

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      {console.log(props)}
      {links.map(link => <NavLink style={navLinkStyles} tabIndex={tabIndex} key={link.path} to={link.path} onClick={()=>props.setOpen(false)}>
        {link.name}
      </NavLink>)}
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
