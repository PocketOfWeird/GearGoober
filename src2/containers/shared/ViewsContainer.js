import React from 'react'
import { connect } from 'react-redux'
import EquipmentViewsContainer from '../equipment'


const ViewsContainer = () => (
  <div style={styles}>
    {true &&
      <EquipmentViewsContainer />
    }
  </div>
)

let styles = {
  margin: '0.15rem'
}

export default ViewsContainer
