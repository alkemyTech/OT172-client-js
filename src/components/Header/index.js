import React, { useEffect, useState } from 'react'
import { getService } from 'services/apiService'
import { ENDPOINT_PUBLIC } from 'services/settings'
import NavBar from './NavBar'
import { Container, Logo } from './styles'

const tempLogo = 'https://assets-dev.alkemy.org/assets/logo.svg'

export default function Header() {
  const [ongData, setOngData] = useState()
  
  useEffect(() => {
    getOrganizationData();
  }, []);

  const getOrganizationData = async () => {
    const response = await getService(ENDPOINT_PUBLIC);
    setOngData(response.data)
  }

  return (
    <Container>
      <Logo src={ongData ? ongData.imageUrl : ''} />
      <NavBar />
    </Container>
    )
}
