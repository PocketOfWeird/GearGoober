import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import map from 'lodash.map'


const Categories = ({ categoriesObject, handleClick }) => (
  <div>
    {map(categoriesObject, (cat, key) =>
      <RaisedButton
        key={key}
        label={cat.name}
        onTouchTap={handleClick(cat.id)}
        style={styles.button}
      />
    )}
  </div>
)

let styles = {
  button: {
    margin: 12
  }
}

Categories.propTypes = {
  categoriesObject: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Categories
