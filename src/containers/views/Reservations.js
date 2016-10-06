import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'

const Reservations = ({ view }) => (
  <div>
    <h2>Reservations</h2>
  </div>
)

Reservations.propTypes = {
  view: ImmutablePropTypes.list.isRequired
}

export default Reservations
