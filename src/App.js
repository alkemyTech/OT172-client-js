import React, { useEffect } from 'react'
import RoutesWeb from './routes/routesWeb'
import Header from 'components/Header'
import Footer from './components/Footer'
import { useDispatch } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { fetchOrganizationDataPublic } from 'store/slices/organization'
import { GlobalStyle } from 'globalStyles'



function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOrganizationDataPublic())
  }, [dispatch])
  
  return (
    <>
      <GlobalStyle/>   
      <Header/>
      {/* <ToastContainer/> */}
      <Toaster />
      <RoutesWeb />
      <Footer />
    </>
  )
}

export default App

