import React from 'react'
import Container from '../../atoms/Container'
import FilterBox from '../../molecules/FilterBox'

type QueryTemplateComponentInterface = {
  filterComponent?: string 
  listingComponent?: string 
}

const QueryTemplateComponent: 
React.FC<QueryTemplateComponentInterface> = ({ listingComponent, filterComponent }
) => (
  <>
    <FilterBox> { filterComponent } </FilterBox>
    <Container> { listingComponent } </Container>
  </> 
)

export default QueryTemplateComponent