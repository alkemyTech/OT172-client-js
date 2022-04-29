import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
      {/* {location !== '/' ? <Header ongData={ongData} /> : null} */}
      <Header/>
      <RoutesWeb />
      <Footer ongData={ongData} />
      <ToastContainer/>
    </>
  )
}

export default App

