import React from 'react'
import { useSelector } from 'react-redux'
import NavBar from './NavBar'
import { Container, Logo } from './styles'

export default function Header () {
  const { list: organization } = useSelector(state => state.organization)
 
  return (
    <Container>
      <Logo src={organization ? organization.imageUrl : ''} />
      <NavBar />
    </Container>
  )
}
