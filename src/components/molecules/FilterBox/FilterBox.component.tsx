import React, { useState } from 'react'
import { StyledComponentPropsWithRef } from 'styled-components'
import Button from '../../atoms/Button'
import Container from '../../atoms/Container/'
import FilterBox from './FilterBox.style'

interface FilterBoxComponentInterface extends StyledComponentPropsWithRef<typeof FilterBox> {
  children?: JSX.Element | JSX.Element[]
  handleSubmit: () => void
  description: string
}

const FilterBoxComponent: React.FC<FilterBoxComponentInterface> = ({
  children,
  handleSubmit,
  description,
  ...rest
}) => {
  const [active, setActive] = useState(false)

  return (
    <FilterBox
      active={active}
      onClick={() => {
        setActive(!active), console.log(!active)
      }}
      {...rest}
    >
      <Container>{children}</Container>
      <Button onClick={handleSubmit}>{description}</Button>
    </FilterBox>
  )
}

export default FilterBoxComponent
