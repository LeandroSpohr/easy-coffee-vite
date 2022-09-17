import React from 'react'
import Paper from './Paper.style'

type PaperComponentInterface = {
  children?: JSX.Element | JSX.Element[]
};

const PaperComponent: React.FC<
  PaperComponentInterface
> = ({
  children,
}) => (
  <Paper>
    {children}
  </Paper>
)

export default PaperComponent