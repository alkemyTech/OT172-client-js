import React from 'react'

import { CreateUserForm } from 'components/CreateUser'
import { Container } from './styles'
import News from 'components/News'

import { LoginUserForm } from "components/LoginUser"

function Home () {
 

  return (
    <Container>
      <h1>Bienvenid@ a Somos Más</h1>
      <p>Aca va el Componente Slider</p>
      <News qty={4} title='Últimas Noticias'/>
      <CreateUserForm />
      <LoginUserForm />
    </Container>
  )
}

export default Home
