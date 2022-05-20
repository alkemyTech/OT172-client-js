import React from 'react'
import { bool, func } from 'prop-types'
import { StyledSettingIcon } from './styles'
import { FiSettings } from 'react-icons/fi'

const SettingIcon = ({ open, setOpen, ...props }) => {
  const isExpanded = !!open

  return (
    <StyledSettingIcon aria-label='Toggle menu' aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
      <span />
      <span />
      <span />
      <FiSettings />
    </StyledSettingIcon>
  )
}

SettingIcon.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
}

export default SettingIcon
