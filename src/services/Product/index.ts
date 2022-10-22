import api from '../../config/api'
import ProductInterface from '../../models/interfaces/Product'
const path = '/easy-coffee/v1/product'

const getAll = () => api.get<ProductInterface[]>(path)
  .then((response) => response.data)

export {
  getAll
}
