import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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

      {/* {location !== '/' ? <Header ongData={ongData} /> : null} */}
      <Header/>
      <RoutesWeb />
      <Footer ongData={ongData} />
      <ToastContainer/>
      <Toaster />
      <RoutesWeb />
      <Footer />
    </>
  )
}

export default App

