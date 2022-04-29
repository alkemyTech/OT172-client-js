import { configureStore } from '@reduxjs/toolkit'
import categories from './slices/categories'
import organization from './slices/organization'
import news from './slices/news'
import users from './slices/users'
import auth from './slices/auth'



export default configureStore({
  reducer: {
    categories,
    users,
    news,
    organization,
    auth
  }
})
