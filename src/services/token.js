const TOKEN_KEY = 'tokenOT172'

export function setToken (token) {
  // eslint-disable-next-line
  localStorage.setItem(TOKEN_KEY, token)
}

export function getToken () {
  // eslint-disable-next-line
  return localStorage.getItem(TOKEN_KEY)
}

export function deleteToken () {
  // eslint-disable-next-line
  localStorage.removeItem(TOKEN_KEY)
}
