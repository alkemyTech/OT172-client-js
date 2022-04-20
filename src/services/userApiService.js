import {
    deleteProfile, getProfile
  } from './apiService'

  const usersDeleteUrl = process.env.REACT_APP_API_USERS_DELETE

  export const getUsers = (id) => {
    return getPrivateHandler(usersGetUrl, id)
  }

  export const deleteUsers = (id) => {
    return deletePrivateHandler(usersDeleteUrl, id)
  }