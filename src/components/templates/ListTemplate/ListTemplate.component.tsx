import React from 'react'
import Container from '../../atoms/Container'
import Typography from '../../atoms/Typography'
import { ContentWrapper, TitleWrapper } from './ListTemplate.styles'

interface ListInterface {
  title: string
  children: JSX.Element | JSX.Element[]
}

const List = ({ title, children }: ListInterface) => {
  return (
    <Container displayBlock fullHeight>
      <TitleWrapper>
        <Typography as="h1">{title}</Typography>
      </TitleWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  )
}

export default List
