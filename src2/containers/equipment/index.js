import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import SearchContainer from '../shared/SearchContainer'


const EquipmentViewsContainer = () => (
  <Tabs value={'search'}>
    <Tab label='Search' value='search'>
      <SearchContainer />
    </Tab>
  </Tabs>
)

export default EquipmentViewsContainer
