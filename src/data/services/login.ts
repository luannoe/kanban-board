import api from './api'
import { setCookie } from 'nookies'

interface ILoginPayload {
  login: string
  senha: string
}

export const LoginAPI = {
  login: async (payload: ILoginPayload) => {
    const response = await api.post('/login', payload)

    if (response.data) {
      window.localStorage.setItem('@token', response.data)
      setCookie(null, 'token', response.data, {
        path: '/',
      })
    }

    return response.data
  },
}

export default LoginAPI
