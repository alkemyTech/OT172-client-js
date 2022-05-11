import axios from 'axios'
import { getToken } from 'services/token'

const fetcher = (verb, endPoint, body=null, isForm=false) => {
  
  const apiService = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  })

  const token = getToken()

  if (token) {
    apiService.defaults.headers.common = { 'x-access-token': `${token}` }
  }
  if (isForm) {
    const form = new FormData();
  for (let key in body) {
    form.append(key, body[key]);
  }
  body = form
  apiService.defaults.headers.common = { 'Content-Type': 'multipart/form-data' }
  }
  return apiService[verb](endPoint, body)
}

export const getService = (apiEndpoint, id) => {
  const apiServiceUrl = id ? `${apiEndpoint}/${id}` : `${apiEndpoint}`
  return fetcher('get', apiServiceUrl)
}

export const deleteService = (apiEndpoint, id) => {
  const apiServiceUrl = `${apiEndpoint}/${id}`
  return fetcher('delete', apiServiceUrl)
}

export const updateService = (apiEndpoint, id, data, isForm=false) => {
  const apiServiceUrl = `${apiEndpoint}/${id}`
  return fetcher('patch', apiServiceUrl, data, isForm)
}

export const postService = (apiEndpoint, data, isForm=false) => {
  const apiServiceUrl = `${apiEndpoint}`
  return fetcher('post', apiServiceUrl, data, isForm)
}
