import styled from 'styled-components'
import { colors, sizes } from '../../assets/styles/variables'
import Input from '../../components/atoms/Input'
import Paper from '../../components/atoms/Paper'

export const ContentWrapper = styled.div`
  border-radius: ${sizes.size20} ${sizes.size20} 0 0;
  background-color: ${colors.transparentBrown};
  min-height: 100%;
  text-align: center;
`

export const FormInput = styled(Input)``

export const FormWrapper = styled.div``

export const FieldsWrapper = styled.div`
  display: flex;
`

export const ProductCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProductCardBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.transparentBrown};
  height: 28rem;
  border-radius: 5rem;
  width: 70%;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
`

export const StyledPaper = styled(Paper)`
  outline: 3px solid ${colors.white};
  outline-offset: -10px;
  text-align: center;
  width: 95%;
`

export const PaperWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
