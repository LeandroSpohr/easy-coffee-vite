import { UserContextInterface } from '../../models/interfaces/User'

const initialValues: UserContextInterface = {
  hasUser: false,
  user: null,
  cart: [],
  idle: {
    isIdle: false,
  },
}

export default initialValues
