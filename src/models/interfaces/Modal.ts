import { ReactElement } from 'react'

export default interface ModalInterface {
  content: ReactElement | null
  isVisible?: boolean | false
}
