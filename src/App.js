import React, { useEffect } from 'react'
import Header from 'components/Header'
import Footer from './components/Footer'
import { useDispatch, useSelector } from 'react-redux'
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
  const { list } = useSelector((state) => state.organization)
  useEffect(() => {
    dispatch(fetchOrganizationDataPublic(1))
  }, [dispatch])

  useEffect(()=>{ //This change the name of the page when reducer updates
    document.title= list.name
  })

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
