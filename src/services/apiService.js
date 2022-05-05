import axios from 'axios'
import { getToken } from 'services/token'

const fetcher = (verb, endPoint, body=null) => {
  const apiService = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  })

  const token = getToken()

  if (token) {
    apiService.defaults.headers.common = { 'x-access-token': `${token}` }
  }
  return apiService[verb](endPoint,body)
}

export const getService = (apiEndpoint, id) => {
  
  const apiServiceUrl = id ? `${apiEndpoint}/${id}` : `${apiEndpoint}`
  return fetcher('get', apiServiceUrl)
}

export const postService = (apiEndpoint, data) => {
  const apiServiceUrl = `${apiEndpoint}`
  return fetcher('post', apiServiceUrl, data)
}

// TODO con fetcher
// export const deleteService = (apiEndpoint, id) => {
//   if (!id) return 'error'
//   const apiServiceUrl = `${apiEndpoint}/${id}`
//   return apiService.delete(apiServiceUrl).catch((err) => {
//     console.log(err)
//     const error = {
//       error: true,
//       message: err.message
//     }
//     return error
//   })
// }
