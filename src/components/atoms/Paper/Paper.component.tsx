import React from 'react'
import {StyledComponentPropsWithRef} from 'styled-components'
import Paper from './Paper.style'

interface PaperComponentInterface extends StyledComponentPropsWithRef<typeof Paper> {
  fluid?: boolean
  fullCentered?: boolean
  backgroundColor?: string
}

const PaperComponent: React.FC<
  PaperComponentInterface
> = ({
  children,
  fluid,
  fullCentered,
  ...rest
}) => (
  <Paper
    fluid={fluid}
    fullCentered={fullCentered}
    {...rest}
  >
    {children}
  </Paper>
)

export default PaperComponent
