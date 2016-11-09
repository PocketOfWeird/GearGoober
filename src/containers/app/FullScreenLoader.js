import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'

const FullScreenLoader = ({}) => (
  <div style={styles}>
    <CircularProgress size={80} thickness={5} />
  </div>
)

let styles = {
  'position': 'absolute',
  'top':0,
  'left':0,
  'width': '100%',
  'height': '100%',
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'center',
  'background': 'rgba(169, 184, 200, .25)'
}

export default FullScreenLoader
