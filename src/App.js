import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { getService } from 'services/apiService'
import { ENDPOINT_PUBLIC } from 'services/settings'
import RoutesWeb from './routesWeb'
import Header from 'components/Header'
import Footer from './components/Footer'

const getOrganizationData = async setOngData => {
  const response = await getService(ENDPOINT_PUBLIC)
  setOngData(response.data)
}

function App () {
  const location = useLocation().pathname
  const [ongData, setOngData] = useState()

  useEffect(() => {
    getOrganizationData(setOngData)
  }, [])

  return (
    <>
      {location !== '/' ? <Header ongData={ongData} /> : null}
      <RoutesWeb />
      <Footer ongData={ongData} />
    </>
  )
}

export default App

// Acá se podrá invocar los dispatchers y los states de Redux, y pasarselos por props
// a las rutas que se requieran.
