import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'

const Settings = ({ view }) => (
  <div>
    <h2>Settings</h2>
  </div>
)

Settings.propTypes = {
  view: ImmutablePropTypes.list.isRequired
}

export default Settings
