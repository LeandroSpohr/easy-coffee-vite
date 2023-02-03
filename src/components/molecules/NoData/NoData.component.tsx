import React from 'react'
import { ButtonEnum } from '../../../models/Enums/Button'
import { useNavigation } from '../../../utils/useNavigation'
import Button from '../../atoms/Button'
import Typography from '../../atoms/Typography'
import { ButtonsWrapper, ContentWrapper, NoData } from './NoData.styles'

interface NoDataInterface {
  text: string
}

const NoDataComponent = ({ text }: NoDataInterface) => {
  const { goBack, goToProducts } = useNavigation()
  return (
    <NoData>
      <ContentWrapper>
        <Typography as="h2">{text}</Typography>
        <ButtonsWrapper>
          <Button onClick={() => goBack()}>Voltar</Button>
          <Button buttonType={ButtonEnum.MainButton} onClick={() => goToProducts()}>
            Comprar
          </Button>
        </ButtonsWrapper>
      </ContentWrapper>
    </NoData>
  )
}

export default NoDataComponent
