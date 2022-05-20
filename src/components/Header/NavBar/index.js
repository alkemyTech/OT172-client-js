import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from './styles'
import { links } from 'config/const'
import { navLinkStyles } from '../styles'

export default function NavBar () {
  return (
    <Container>
      {links.map(link => <NavLink style={navLinkStyles} key={link.path} to={link.path}>{link.name}</NavLink>)}
    </Container>
  )
}
