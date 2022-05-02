import React, { useEffect } from 'react'
import RoutesWeb from './routesWeb'
import Header from 'components/Header'
import Footer from './components/Footer'
import { useDispatch } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { fetchOrganizationDataPublic } from 'store/slices/organization'



function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOrganizationDataPublic())
  }, [dispatch])
  
  return (
    <>

      <Header/>
      {/* <ToastContainer/> */}
      <Toaster />
      <RoutesWeb />
      <Footer />
      
    </>
  )
}

export default App

