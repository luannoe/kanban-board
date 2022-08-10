import axios, { AxiosError } from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

api.interceptors.request.use((config: any) => {
  if (typeof window !== 'undefined') {
    const token = window.localStorage?.getItem('@token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }

  return config
})

api.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    if (
      (error?.message || '').includes('code 401') ||
      (error?.message || '').includes('Unauthorized')
    ) {
      window.localStorage.removeItem('@token')
      window.open('/login', '_self')
    }

    return Promise.reject(error)
  },
)

export default api
