import React, { useEffect } from 'react'
import Header from 'components/Header'
import Footer from './components/Footer'
import { useDispatch } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { fetchOrganizationDataPublic } from 'store/slices/organization'
import RoutesWeb from 'routes/routesWeb'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global'
import { theme } from './theme'

const toastOptions = {
  duration: 900
}

function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchOrganizationDataPublic(1))
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Toaster
          toastOptions={toastOptions}
        />
        <RoutesWeb />
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App
