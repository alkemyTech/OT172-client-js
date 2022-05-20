import axios from 'axios'

import { ENDPOINT_REGISTER } from './settings'

export const postUserService = async values => {
  const response = axios
    .post(ENDPOINT_REGISTER, values)
    .then(() => true)
    .catch(error => {
      if (
        error.response.data &&
        error.response.data.msg === `Email ${values.email} already in use`
      ) { return 'El email ingresado ya existe' } else if (error.response.data && error.response.data.error) { return 'Error interno del servidor, por favor contacte con el servicio técnico' } else return error.response.data.msg
    })

  return response
}
