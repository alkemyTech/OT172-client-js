import axios from 'axios'
import { ENDPOINT_AUTH } from '../../../services/settings'

// Register user
const register = async (userData) => {
    const response = await axios.post(ENDPOINT_AUTH + 'register', userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// Login user
const login = async (userData) => {
    const response = await axios.post(ENDPOINT_AUTH  + 'login', userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// Logout
const logout = () => {
    localStorage.removeItem('user')
  }

const authService = {
    register,
    logout,
    login
}

export default authService