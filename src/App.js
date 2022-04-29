import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchOrganizationDataPublic } from 'store/slices/organization'

import RoutesWeb from './routesWeb'
import Header from 'components/Header'
import Footer from './components/Footer'
import { useDispatch } from 'react-redux'
import { Toaster } from 'react-hot-toast'

function App () {
  const location = useLocation().pathname
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchOrganizationDataPublic())
  }, [dispatch])
  
  return (
    <>
      <Toaster />
      <Header />
      <RoutesWeb />
      <Footer />
    </>
  )
}

export default App

// Acá se podrá invocar los dispatchers y los states de Redux, y pasarselos por props
// a las rutas que se requieran.
