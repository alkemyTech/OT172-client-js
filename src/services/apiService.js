import axios from 'axios'
import { getToken } from 'services/token'

const token = getToken()

const apiService = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

if (token) {
  apiService.defaults.headers.common = {'x-access-token': `${token}`}
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
      message: err.message
    }
    return error
  })
}
