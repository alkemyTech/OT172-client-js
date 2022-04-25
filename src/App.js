import React from 'react'
import './App.css'
import { BrowserRouter,  Route,  Routes } from 'react-router-dom'
import OrganizationData from 'components/OrganizationData'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<OrganizationData />} />
        <Route path='/ong' element={<OrganizationData />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
