import React from 'react'
import { bool, func } from 'prop-types'
import { StyledSettingIcon } from './styles'
import { FiSettings, FiUser } from 'react-icons/fi'
import { useSelector } from 'react-redux'

const MenuIcon = ({ isAdmin = false, open, setOpen, ...props }) => {
  const { user } = useSelector((state) => state.auth)

  const isExpanded = !!open

  return (
    <StyledSettingIcon aria-label='Toggle menu' aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
      <span />
      <span />
      <span />
      {user?.roleId === 1 ? <FiSettings /> : <FiUser />}
    </StyledSettingIcon>
  )
}

MenuIcon.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
}

export default MenuIcon
