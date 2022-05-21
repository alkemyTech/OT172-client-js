import React from 'react'
import { bool } from 'prop-types'
import { StyledMenu } from './styles'
import { links } from 'config/const'
import { NavLink } from 'react-router-dom'
import { navLinkStyles } from 'components/Header/styles'
import { CardCreditos, CardMenuNavegation } from 'components/Header/utils/styles'
import { FaHeart } from 'react-icons/fa'

const Menu = ({ open, ...props }) => {
  const isHidden = !!open
  const tabIndex = isHidden ? 0 : -1

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <CardMenuNavegation>
        <h1>Somos Mas</h1>
        {
          links.map(link =>
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
      </CardMenuNavegation>
      <CardCreditos>
        <NavLink style={navLinkStyles} to='/credits' onClick={() => props.setOpen(false)}> Creditos </NavLink>
      </CardCreditos>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired
}

export default Menu
