import React, { PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


const Login = ({
  values, errors,
  handleChange, handleBlur, handleSubmit
}) => (
  <Card>
    <CardHeader
      title='Gear Goober'
      subtitle='Login'
      avatar='logo_sm.png'
    />
    <CardText>
      <TextField
        name='email'
        type='email'
        floatingLabelText='Email'
        fullWidth={true}
        value={values.get('email') || ''}
        errorText={errors.get('email') || ''}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextField
        name='password'
        type='password'
        floatingLabelText='Password'
        fullWidth={true}
        value={values.get('password') || ''}
        errorText={errors.get('password') || ''}
        onChange={handleChange}
      />
    </CardText>
    <CardActions>
      <RaisedButton
        label='Login'
        onTouchTap={handleSubmit}
      />
    </CardActions>
  </Card>
)

Login.propTypes = {
  values: ImmutablePropTypes.map.isRequired,
  errors: ImmutablePropTypes.map.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default Login
