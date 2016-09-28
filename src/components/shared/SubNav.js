import React, {PropTypes} from 'react'
import { capitalizeFirstLetter } from '../helpers'

const SubNav = ({ parentView, subViews }) => (
  <div style={styles.div}>

    <h2>{ capitalizeFirstLetter(parentView) }</h2>

    <ul style={styles.ul}>
      {subViews.map((subView, index) => {
        return <li key={index} style={styles.li}>
          <a style={styles.a}
             href={'#/' + parentView + '/' + subView + '/'}>
            {subView}
            <i style={styles.i} className='icon-right-open'></i>
          </a>
        </li>
      })}
    </ul>
  </div>
)

let styles = {
  div: {
    maxWidth: '280px',
    height: '452px'
  },
  ul: {
    listStyle: 'none'
  },
  li: {
    margin: '2rem 2rem 0 2rem',
    padding: '1rem',
    borderRadius: '5px',
    fontSize: '2rem',
    backgroundColor: '#fff'
  },
  a: {
    textDecoration: 'none'
  },
  i: {
    float: 'right'
  }
}

SubNav.propTypes = {
  parentView: PropTypes.string.isRequired,
  subViews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

export default SubNav
