import styled from 'styled-components'
import { sizes } from '../../../assets/styles/variables'
import Button from '../../atoms/Button'
import { ModalWrapper } from '../Modal/Modal.styles'

export const TwoOptionsModal = styled(ModalWrapper)``

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: ${sizes.size10};
`

export const StyledButtons = styled(Button)`
  width: 45%;
`
