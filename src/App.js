import React from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'

import { RoutesWeb } from './routesWeb'
import { Footer } from './components/Footer'

function App () {
  const location = useLocation().pathname
  return (
    <>
      <RoutesWeb />
      {location !== '/' ? <Footer /> : null}
    </>
  )
}

export default App
