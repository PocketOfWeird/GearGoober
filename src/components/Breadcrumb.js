import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { capitalizeFirstLetter } from './helpers'

const Breadcrumb = ({ activeView }) => (
  <div style={activeView.size === 2 ? style : hiddenStyle}>
    {activeView.size === 2 &&
      <div>
        <a style={{textDecoration: 'none'}}
           href={'#/' + activeView.first() + '/'}>
          <i className='icon-left-open'></i>
          {capitalizeFirstLetter(activeView.first())}
        </a>
      </div>
    }
  </div>
)

let style = {
  postition: 'absolute',
  top:'0',
  width:'100%',
  height: '32px',
  paddingTop: '1rem',
  paddingLeft: '1rem',
  color: '#000',
  backgroundColor: '#fff'
}
let hiddenStyle = {
  display: 'none'
}

Breadcrumb.propTypes = {
  activeView: ImmutablePropTypes.list.isRequired
}

export default Breadcrumb
