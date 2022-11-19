import React from 'react'
import Container from '../../atoms/Container'
import FilterBox from '../../molecules/FilterBox'

type QueryTemplateComponentInterface = {
  filterComponent: JSX.Element 
  listingComponent: JSX.Element
}

const QueryTemplateComponent: 
React.FC<QueryTemplateComponentInterface> = ({ filterComponent, listingComponent }
) => (
  <>
    <FilterBox> { filterComponent } </FilterBox>
    <Container {... listingComponent }/>
  </> 
)

export default QueryTemplateComponent