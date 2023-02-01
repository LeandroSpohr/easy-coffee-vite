import { UserEnum } from '../../models/Enums/User'
import { UserContextInterface } from '../../models/interfaces/User'

const initialValues: UserContextInterface = {
  cart: [],
  hasUser: false,
  permissionLevel: UserEnum.Admin,
  user: null,
}

export default initialValues
