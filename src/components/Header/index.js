import React from 'react'
import { useSelector } from 'react-redux'
import MenuBackOffice from './MenuBackOffice'
import MenuHamburg from './MenuHamburg'
import NavBar from './NavBar'
import { Container, Logo } from './styles'

export default function Header () {
  const { list: organization } = useSelector(state => state.organization)
 
  return (
    <Container>
      <MenuHamburg />
      <Logo src={organization ? organization.imageUrl : ''} />
      <NavBar />
      <MenuBackOffice />
    </Container>
  )
}
