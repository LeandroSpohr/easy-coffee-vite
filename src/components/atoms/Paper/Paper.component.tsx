import React from 'react'
import {StyledComponentPropsWithRef} from 'styled-components'
import Paper from './Paper.style'

interface PaperComponentInterface extends StyledComponentPropsWithRef<typeof Paper> {
  fluid?: boolean
}

const PaperComponent: React.FC<
  PaperComponentInterface
> = ({
  children,
  fluid,
  ...rest
}) => (
  <Paper fluid={fluid} {...rest}>
    {children}
  </Paper>
)

export default PaperComponent
