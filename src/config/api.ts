import axios from 'axios'
import { toast } from 'react-toastify'

const api = axios.create({
  baseURL: 'https://acerta-easy-coffee.uc.r.appspot.com',
})

api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers['x-api-auth'] = import.meta.env.VITE_API_KEY
  }

  return config
})

api.interceptors.response.use(
  (response) => {
    return response
  },

  (error) => {
    toast.error(error.response.data.userMessage)
    return Promise.reject(error)
  },
)

export default api
