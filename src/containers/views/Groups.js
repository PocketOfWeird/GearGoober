import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'

const Groups = ({ view }) => (
  <div>
    <h2>Groups</h2>
  </div>
)

Groups.propTypes = {
  view: ImmutablePropTypes.list.isRequired
}

export default Groups
