import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'

render(
  <div>
    <p>Hello Gear Goober</p>
  </div>,
  document.getElementById('root')
)
