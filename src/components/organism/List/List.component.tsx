import React from 'react'
import Container from '../../atoms/Container'
import Paper from '../../atoms/Paper'
import Typography from '../../atoms/Typography'
import { ContentWrapper } from './List.styles'

interface ListInterface {
  title: string
  children: JSX.Element | JSX.Element[]
}

const List = ({ title, children }: ListInterface) => {
  return (
    <Container displayBlock fullHeight>
      <Paper>
        <Typography>{title}</Typography>
      </Paper>
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  )
}

export default List
