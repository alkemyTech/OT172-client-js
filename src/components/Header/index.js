import React from 'react'
import NavBar from './NavBar'
import { Container, Logo } from './styles'

const tempLogo = 'https://assets-dev.alkemy.org/assets/logo.svg'

export default function Header ({ ongData }) {
  return (
    <Container>
      <Logo src={ongData ? ongData.imageUrl : ''} />
      <NavBar />
    </Container>
  )
}
