import axios from 'axios'

const token = localStorage.getItem('token')

const apiService = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

if (token) {
  apiService.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const getService = (apiEndpoint, id) => {
  const apiServiceUrl = id ? `${apiEndpoint}/${id}` : `${apiEndpoint}`
  return apiService.get(apiServiceUrl)
}

export const deleteService = (apiEndpoint, id) => {
  if (!id) return 'error'
  const apiServiceUrl = `${apiEndpoint}/${id}`
  return apiService.delete(apiServiceUrl).catch((err) => {
    console.log(err)
    const error = {
      error: true,
      message: err.message,
    }
    return error
  })
}

