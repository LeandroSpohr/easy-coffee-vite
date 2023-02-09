import React from 'react'
import { ButtonEnum } from '../../../models/Enums/Button'
import Button from '../../atoms/Button'
import Typography from '../../atoms/Typography'
import { ButtonsWrapper, ContentWrapper, NoData } from './NoData.styles'

interface NoDataInterface {
  text: string
  mainOption: {
    text: string
    action: () => void
  }
  secondaryOption: {
    text: string
    action: () => void
  }
}

const NoDataComponent = ({ text, mainOption, secondaryOption }: NoDataInterface) => {
  return (
    <NoData>
      <ContentWrapper>
        <Typography as="h2">{text}</Typography>
        <ButtonsWrapper>
          <Button fluid onClick={() => mainOption.action()}>{mainOption.text}</Button>
          <Button fluid buttonType={ButtonEnum.OutlinedMainButton} onClick={() => secondaryOption.action()}>
            {secondaryOption.text}
          </Button>
        </ButtonsWrapper>
      </ContentWrapper>
    </NoData>
  )
}

export default NoDataComponent
