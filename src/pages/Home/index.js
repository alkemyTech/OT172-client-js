import React from 'react'

import { CreateUserForm } from '../../components/CreateUser'
import OrganizationData from 'components/OrganizationData'
import { Container } from './styles'

function Home () {
  return (
    <Container>
      Ruta Home
      <OrganizationData />
      <CreateUserForm />
    </Container>
  )
}

export default Home
