import axios from 'axios'

const api = axios.create({
  baseURL: 'https://acerta-easy-coffee.uc.r.appspot.com'
})

api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers['x-api-auth'] = import.meta.env.VITE_API_KEY
  }

  return config
})

export default api
