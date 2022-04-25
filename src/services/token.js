const TOKEN_KEY = 'tokenOT172'

 export function setToken(token) {
   localStorage.setItem(TOKEN_KEY, token)
 }
 
 export function getToken() {
   return localStorage.getItem(TOKEN_KEY)
 }

 export function deleteToken() {
   localStorage.removeItem(TOKEN_KEY)
 }
 