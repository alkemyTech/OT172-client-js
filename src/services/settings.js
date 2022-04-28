const BASE_API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/'

export const ENDPOINT_REGISTER = `${BASE_API_URL}/auth/register`

export const ENDPOINT_LOGIN = `${BASE_API_URL}auth/login`

export const ENDPOINT_GETLOGGED = `${BASE_API_URL}auth/me`

export const ENDPOINT_PUBLIC = `${BASE_API_URL}/organization/1`

export const ENDPOINT_CATEGORIES = `${BASE_API_URL}/categories`
