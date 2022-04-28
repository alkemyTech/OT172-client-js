import React from 'react'
import { BrowserRouter,  Route,  Routes } from 'react-router-dom'
import Home from 'pages/Home'
import Testimonials from 'pages/Testimonials'
import News from 'pages/News'
import Members from 'pages/Members'
import Activities from 'pages/Activities'
import Header from 'components/Header'

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/members' element={<Members />} />
        <Route path='/news' element={<News />} />
        <Route path='/testimonials' element={<Testimonials />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
