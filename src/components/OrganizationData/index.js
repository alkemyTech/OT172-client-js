import React, { useEffect, useState } from "react"
import { getService } from "services/apiService"
import { ENDPOINT_PUBLIC } from "services/settings"
import { Container } from "./styles";

export default function OrganizationData() {
  const [ongData, setOngData] = useState()
  useEffect(() => {
    getOrganizationData();
  }, []);

  const getOrganizationData = async () => {

    const response = await getService(ENDPOINT_PUBLIC);
    console.log('respuesta', response.data)
    setOngData(response.data)
  }

  return (
    <Container>
      OrganizationData
      {ongData
        ? <>
          <p>{ongData.name}</p>
          <p>{ongData.address}</p>
          <p>{ongData.welcomeText}</p>
        </>
        : <p>No hay datos</p>
      }

    </Container>
  )
}
