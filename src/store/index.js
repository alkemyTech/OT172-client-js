import { configureStore } from '@reduxjs/toolkit'
import categories from './slices/categories'
import users from './slices/users'


export default configureStore({
  reducer: {
    categories,
    users
  }
})
