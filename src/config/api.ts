import axios from 'axios'

const api = axios.create({
  baseURL: 'https://acerta-easy-coffee.uc.r.appspot.com/'
})

export default api
