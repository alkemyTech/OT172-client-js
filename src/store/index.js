import { configureStore } from '@reduxjs/toolkit'
import categories from './slices/categories'

export default configureStore({
  reducer: {
    categories
  }
})
