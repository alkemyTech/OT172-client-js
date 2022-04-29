import { configureStore } from '@reduxjs/toolkit'
import categories from './slices/categories'
import organization from './slices/organization'
import news from './slices/news'
import users from './slices/users'


export default configureStore({
  reducer: {
    categories,
    organization,
    news,
    users
  }
})
