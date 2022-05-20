import React, { useEffect } from 'react'
import Header from 'components/Header'
import Footer from './components/Footer'
import { useDispatch } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { fetchOrganizationDataPublic } from 'store/slices/organization'
import { GlobalStyle } from 'globalStyles'
import RoutesWeb from 'routes/routesWeb'

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';


function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchOrganizationDataPublic(2))
  }, [dispatch])
  
  return (
    <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />  
      <Header/>
      <Toaster />
      <RoutesWeb />
      <Footer />
    </>
    </ThemeProvider>
  )
}

export default App

