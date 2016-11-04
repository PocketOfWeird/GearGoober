import React, { PropTypes } from 'react'
import { Card, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import Logo from '../shared/Logo'


const LoginWith = ({ handleTouchTap }) => (
  <div>
    <Logo title={'Gear Goober'} />
    <Card>
      <CardActions>
        <RaisedButton
          label='Login with GitHub'
          primary={true}
          fullWidth={true}
          onTouchTap={handleTouchTap('github')}
        />
      </CardActions>
    </Card>
  </div>
)

LoginWith.propTypes = {
  handleTouchTap: PropTypes.func.isRequired
}

export default LoginWith
