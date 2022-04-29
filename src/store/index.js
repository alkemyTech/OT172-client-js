import { configureStore } from '@reduxjs/toolkit'
import categories from './slices/categories'
import users from './slices/users'
import auth from './slices/auth'



export default configureStore({
  reducer: {
    categories,
    users,
    auth
  }
})
