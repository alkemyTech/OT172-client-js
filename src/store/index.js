import { configureStore } from '@reduxjs/toolkit'
import activities from './slices/activities'
import categories from './slices/categories'
import organization from './slices/organization'
import members from './slices/members'
import news from './slices/news'
import users from './slices/users'
import auth from './slices/auth'
import contacts from './slices/contact'


export default configureStore({
  reducer: {
    activities,
    categories,
    users,
    members,
    news,
    organization,
    auth,
    contacts
  }
})
