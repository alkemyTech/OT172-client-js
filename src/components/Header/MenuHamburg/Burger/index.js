import React from 'react'
import { bool, func } from 'prop-types'
import { StyledBurger } from './styles'

const Burger = ({ open, setOpen, ...props }) => {
  const isExpanded = !!open

  return (
    <StyledBurger aria-label='Toggle menu' aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
}

export default Burger
