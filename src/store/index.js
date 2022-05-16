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
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['create/activities/fulfilled','activities/pending','create/news/fulfilled','create/news/fulfilled','categories/pending','news/pending','categories/fulfilled'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['createActivities.pending','activities.activities.5.image','payload.image','news.news.3.image'],
      },
    }),
})
