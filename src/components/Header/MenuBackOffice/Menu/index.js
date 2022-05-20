import React from 'react'
import { bool } from 'prop-types'
import { StyledMenu } from './styles'
import { linksBackOffice } from 'config/const'
import { NavLink } from 'react-router-dom'
import { navLinkStyles } from 'components/Header/styles'

const Menu = ({ open, ...props }) => {
  const isHidden = !!open
  const tabIndex = isHidden ? 0 : -1
  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
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
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired
}

export default Menu
