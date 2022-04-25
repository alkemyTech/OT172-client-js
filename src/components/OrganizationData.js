import React, { useEffect, useState } from "react";
import { getService } from "services/apiService";
import { ENDPOINT_PUBLIC, ENDPOINT_MEMBERS } from "services/settings"

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
    <div>
      OrganizationData
      {ongData
        ? <>
          <p>{ongData.name}</p>
          <p>{ongData.address}</p>
          <p>{ongData.welcomeText}</p>
        </>
        : <p>No hay datos</p>
      }

    </div>
  )
}
