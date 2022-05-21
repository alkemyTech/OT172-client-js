import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from './styles'
import { links } from 'config/const'
import { navLinkStyles } from '../styles'

const linksWithCredits = [...links, {name: 'Creditos', path: 'credits'}]

export default function NavBar () {
  return (
    <Container>
      {linksWithCredits.map(link => <NavLink style={navLinkStyles} key={link.path} to={link.path}>{link.name}</NavLink>)}
    </Container>
  )
}
