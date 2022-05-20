import axios from 'axios'
import { deleteToken, setToken } from 'services/token'
import { ENDPOINT_AUTH } from 'services/settings'

// Register user
const register = async (userData) => {
  const response = await axios.post(ENDPOINT_AUTH + 'register', userData)

  if (response.data) {
    setToken(response.data.token)
    localStorage.setItem('user', JSON.stringify(response.data.user))
  }
  return response.data.user
}

// Login user
const login = async (userData) => {
  const response = await axios.post(ENDPOINT_AUTH + 'login', userData)

  if (response.data) {
    setToken(response.data.token)
    localStorage.setItem('user', JSON.stringify(response.data.user))
  }
  return response.data.user
}

// Logout
const logout = () => {
  deleteToken()
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login
}

export default authService
