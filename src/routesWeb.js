import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Testimonials from 'pages/Testimonials'
import NewsPage from 'pages/NewsPage'
import Members from 'pages/Members'
import Login from 'pages/Auth/Login'
import Register from 'pages/Auth/Register'
import Categories from 'pages/BackOffice/Categories'
import AboutUs from 'pages/AboutUs'
import {  useSelector } from 'react-redux'
import Users from 'pages/BackOffice/Users'
import New from 'pages/New'
import { CategoryForm } from 'pages/BackOffice/Categories/CategoryForm'
import Contacts from 'pages/BackOffice/Contacts'
import { ActivityForm } from 'pages/BackOffice/Activities/ActivityForm'
import ActivitiesScreen from 'pages/BackOffice/Activities'
import ActivitiesPage from 'pages/Activities/ActivitiesPage'
import Activity from 'pages/Activities/Activity'

export default function RoutesWeb () {
  
 const { user } = useSelector((state) => state.auth)

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/activities' element={<ActivitiesPage />} />
      <Route path='/activities/:id' element={<Activity />} />
      <Route path='/members' element={<Members />} />
      <Route path='/news' element={<NewsPage />} />
      <Route path='/news/:id' element={<New />} />
      <Route path='/testimonials' element={<Testimonials />} />
      <Route path='/aboutus' element={<AboutUs />} />

      {/* BackOffice */}
      {user?.user?.roleId === 1 &&
        <>
          <Route path='/backoffice/users' element={<Users />} />
          <Route path='/backoffice/categories' element={<Categories />} />
          <Route path='/backoffice/categories/new' element={<CategoryForm />} />
          <Route path='/backoffice/categories/:id' element={<CategoryForm />} />
          <Route path='/backoffice/contacts' element={<Contacts />} />
          <Route path='/backoffice/activities' element={<ActivitiesScreen />} />
          <Route path='/backoffice/activities/new' element={<ActivityForm />} />
          <Route path='/backoffice/activities/:id' element={<ActivityForm />} />
        </>
      }
    </Routes>
  )
}
