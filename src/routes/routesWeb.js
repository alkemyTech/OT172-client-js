import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Testimonials from 'pages/Testimonials'
import NewsPage from 'pages/News/NewsPage'
import Login from 'pages/Auth/Login'
import Register from 'pages/Auth/Register'
import Categories from 'pages/BackOffice/Categories'
import AboutUs from 'pages/AboutUs'
import Users from 'pages/BackOffice/Users'
import New from 'pages/News/New'
import { CategoryForm } from 'pages/BackOffice/Categories/CategoryForm'
import { ActivityForm } from 'pages/BackOffice/Activities/ActivityForm'
import ActivitiesScreen from 'pages/BackOffice/Activities'
import ActivitiesPage from 'pages/Activities/ActivitiesPage'
import Activity from 'pages/Activities/Activity'
import { PrivatedRoute } from 'routes/PrivatedRoute'
import { ProtectedRoute } from 'routes/ProtectedRoute'
import Page404 from './404'
import NewsScreenBackOffice from 'pages/BackOffice/News'
import { NewsForm } from 'components/News/Form'
import styled from 'styled-components'
import MembersScreen from 'pages/BackOffice/Members'
import { MemberForm } from 'pages/BackOffice/Members/MemberForm'
import { EditOrganizationForm } from 'pages/EditOrganization/formEdit'
import { UserForm } from 'pages/BackOffice/Users/UserForm'
import Profile from 'pages/Auth/Profile'
import Credits from 'pages/Credits'
import ScrollToTop from 'components/utils/ScrollToTop'

export default function RoutesWeb () {
  return (
    <Container>
      <Routes>
        {/* Public routes */}

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/activities' element={<ActivitiesPage />} />
        <Route path='/activities/:id' element={<Activity />} />
        <Route path='/news' element={<NewsPage />} />
        {/* <Route path='/members' element={<Members />} /> */}

        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/credits' element={<Credits />} />

        {/* Protected routes */}
        <Route path='/profile/:id' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path='/profile/edited' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      
        <Route path='/news/:id' element={<ProtectedRoute><New /></ProtectedRoute>} />

        {/* BackOffice */}
        <Route path='/backoffice/users' element={<PrivatedRoute><Users /></PrivatedRoute>} />
        <Route path='/backoffice/users/new' element={<PrivatedRoute><UserForm /></PrivatedRoute>} />
        <Route path='/backoffice/users/:id' element={<PrivatedRoute><UserForm /></PrivatedRoute>} />
        <Route path='/backoffice/categories' element={<PrivatedRoute><Categories /></PrivatedRoute>} />
        <Route path='/backoffice/categories/new' element={<PrivatedRoute><CategoryForm /></PrivatedRoute>} />
        <Route path='/backoffice/categories/:id' element={<PrivatedRoute><CategoryForm /></PrivatedRoute>} />
        <Route path='/backoffice/activities' element={<PrivatedRoute><ActivitiesScreen /></PrivatedRoute>} />
        <Route path='/backoffice/activities/:id' element={<PrivatedRoute><ActivityForm /></PrivatedRoute>} />

        <Route path='/backoffice/members' element={<PrivatedRoute><MembersScreen /></PrivatedRoute>} />
        <Route path='/backoffice/members/new' element={<PrivatedRoute><MemberForm /></PrivatedRoute>} />
        <Route path='/backoffice/members/:id' element={<PrivatedRoute><MemberForm /></PrivatedRoute>} />
        <Route path='/backoffice/activities/new' element={<PrivatedRoute><ActivityForm /></PrivatedRoute>} />

        <Route path='/backoffice/news' element={<PrivatedRoute><NewsScreenBackOffice /></PrivatedRoute>} />
        <Route path='/backoffice/news/new' element={<PrivatedRoute><NewsForm /></PrivatedRoute>} />
        <Route path='/backoffice/news/:id' element={<PrivatedRoute><NewsForm /></PrivatedRoute>} />
        <Route path='*' element={<Page404 />} />

        <Route path='/backoffice/edit-organization' element={<PrivatedRoute><EditOrganizationForm /></PrivatedRoute>} />
      </Routes>
      <ScrollToTop showButtonAt={60} />

    </Container>
  )
}

const Container = styled.div`
  margin-top: var(--header-height);
`
