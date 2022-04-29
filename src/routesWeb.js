import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Testimonials from 'pages/Testimonials'
import NewsPage from 'pages/NewsPage'
import Members from 'pages/Members'
import Activities from 'pages/Activities'
import Auth from 'pages/Auth'
import Login from 'pages/Auth/Login'
import Register from 'pages/Auth/Register'
import Categories from 'pages/BackOffice/Categories'



export default function RoutesWeb () {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/activities' element={<Activities />} />
      <Route path='/members' element={<Members />} />
      <Route path='/news' element={<NewsPage />} />
      <Route path='/testimonials' element={<Testimonials />} />
      <Route path='/backoffice/categories' element={<Categories />} />
    </Routes>
  )
}
