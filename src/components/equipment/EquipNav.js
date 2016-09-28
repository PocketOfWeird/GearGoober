import React from 'react'
import SubNav from '../shared/SubNav'

const EquipNav = () => (
  <SubNav
    parentView = {'equipment'}
    subViews = {[
      'search',
      'browse',
      'add',
      'inventory'
    ]}
  />
)

export default EquipNav
