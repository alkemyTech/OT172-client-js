import {
    deleteProfile, getProfile
  } from './apiService'
  
  const usersGetUrl = process.env.REACT_APP_API_USERS_GET
  const usersDeleteUrl = process.env.REACT_APP_API_USERS_DELETE

  export const getUsers = (id) => {
    return getProfile(usersGetUrl, id)
  }

  export const deleteUsers = (id) => {
    return deleteProfile(usersDeleteUrl, id)
  }