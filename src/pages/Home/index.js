import OrganizationData from 'components/OrganizationData'
import React from 'react'
import { Container } from "./styles"

function Home() {
  return (
    <Container>
      Ruta Home
      <OrganizationData />
    </Container>
  )
}

export default Home