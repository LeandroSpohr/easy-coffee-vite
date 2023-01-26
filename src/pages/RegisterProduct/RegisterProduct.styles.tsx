import { Col, Row } from 'react-grid-system'
import styled from 'styled-components'
import { colors, sizes } from '../../assets/styles/variables'
import Input from '../../components/atoms/Input'
import Paper from '../../components/atoms/Paper'

export const ContentWrapper = styled.div`
  border-radius: ${sizes.size20} ${sizes.size20} 0 0;
  background-color: ${colors.transparentBrown};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1%;
  margin-top: 4rem;
`

export const FormInput = styled(Input)``

export const FormWrapper = styled.div``

export const ProductCardBackgroundWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ProductCardBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.brown};
  height: 30rem;
  border-radius: 2.5rem;
  width: 23rem;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
`

export const StyledPaper = styled(Paper)`
  outline: 3px solid ${colors.white};
  outline-offset: -10px;
  width: 95%;
`

export const ProductPreviewTitle = styled.div`
  text-align: center;
  background-color: ${colors.brown};
  border-radius: 2.5rem;
  margin-block: 2rem;
`

export const RowWrapper = styled(Row)`
  display: flex;
  justify-content: end;
`

export const ColWrapper = styled(Col)`
  justify-content: end;
`

export const PriceAndPasteWrapper = styled(Row)``
