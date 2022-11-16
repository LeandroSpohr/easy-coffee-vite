import React, { useState } from 'react'
import { StyledComponentPropsWithRef } from 'styled-components'
import Button from '../../atoms/Button'
import Container from '../../atoms/Container/'
import FilterBox from './FilterBox.style'

interface FilterBoxComponentInterface extends StyledComponentPropsWithRef<typeof FilterBox> {
  children: JSX.Element[]
  handleSubmit: () => void
  toggleText: string
  submitText: string
}

const FilterBoxComponent: React.FC<FilterBoxComponentInterface> = ({
  children,
  handleSubmit,
  toggleText,
  submitText,
  ...rest
}) => {
  const [active, setActive] = useState(false)

  return (
    <FilterBox active={active} {...rest}>
      <Button onClick={() => setActive(!active)}>{toggleText}</Button>
      <Container>{children}</Container>
      <Button id="submitButton" onClick={handleSubmit}>
        {submitText}
      </Button>
    </FilterBox>
  )
}

export default FilterBoxComponent
