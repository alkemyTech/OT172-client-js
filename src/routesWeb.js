import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Testimonials from 'pages/Testimonials'
import NewsPage from 'pages/NewsPage'
import Members from 'pages/Members'
import Activities from 'pages/Activities'
import Login from 'pages/Auth/Login'
import Register from 'pages/Auth/Register'
import Categories from 'pages/BackOffice/Categories'
import {  useSelector } from 'react-redux'
import Users from 'pages/BackOffice/Users'




export default function RoutesWeb () {
  
 const { user } = useSelector((state) => state.auth)

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

      {/* BackOffice */}
      {user?.roleId === 1 &&
        <>
          <Route path='/backoffice/users' element={<Users />} />
          <Route path='/backoffice/categories' element={<Categories />} />
        </>
      }
    </Routes>
  )
}
