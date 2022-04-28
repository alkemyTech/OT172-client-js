import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'

const links = [
  {
    name: 'Home',
    path: 'home'
  },
  {
    name: 'News',
    path: 'news'
  },
  {
    name: 'Testimonials',
    path: 'testimonials'
  },
  {
    name: 'Members',
    path: 'members'
  }
]

export default function NavBar() {
  return (
    <Container>
      {links.map(link => <Link key={link.path} to={link.path}>{link.name}</Link>)}
    </Container>
  )
}
