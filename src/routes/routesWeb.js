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
import Users from 'pages/BackOffice/Users'
import New from 'pages/New'
import { CategoryForm } from 'pages/BackOffice/Categories/CategoryForm'
import { ActivityForm } from 'pages/BackOffice/Activities/ActivityForm'
import ActivitiesScreen from 'pages/BackOffice/Activities'
import ActivitiesPage from 'pages/Activities/ActivitiesPage'
import Activity from 'pages/Activities/Activity'
import { PrivatedRoute } from 'routes/PrivatedRoute'
import { ProtectedRoute } from 'routes/ProtectedRoute'

export default function RoutesWeb() {

  return (
    <Routes>
      {/* Public routes */}

      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
      <Route path='/activities' element={<ActivitiesPage />} />
      <Route path='/activities/:id' element={<Activity />} />
      <Route path='/members' element={<Members />} />
      
      <Route path='/testimonials' element={<Testimonials />} />
      <Route path='/aboutus' element={<AboutUs />} />
      
      {/* Protected routes */}

      <Route path='/news' element={<ProtectedRoute><NewsPage /></ProtectedRoute>} />
      <Route path='/news/:id' element={<ProtectedRoute><New /></ProtectedRoute>} />

      {/* BackOffice */}
      <Route path='/backoffice/users' element={<PrivatedRoute><Users /></PrivatedRoute>} />
      <Route path='/backoffice/categories' element={<PrivatedRoute><Categories /></PrivatedRoute>} />
      <Route path='/backoffice/categories/new' element={<PrivatedRoute><CategoryForm /></PrivatedRoute>} />
      <Route path='/backoffice/categories/:id' element={<PrivatedRoute><CategoryForm /></PrivatedRoute>} />
      <Route path='/backoffice/activities' element={<PrivatedRoute><ActivitiesScreen /></PrivatedRoute>} />
      <Route path='/backoffice/activities/new' element={<PrivatedRoute><ActivityForm /></PrivatedRoute>} />
      <Route path='/backoffice/activities/:id' element={<PrivatedRoute><ActivityForm /></PrivatedRoute>} />
    </Routes>
  )
}
