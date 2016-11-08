import React, { PropTypes } from 'react'
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
        value={values.email || ''}
        errorText={errors.email || ''}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextField
        name='password'
        type='password'
        floatingLabelText='Password'
        fullWidth={true}
        value={values.password || ''}
        errorText={errors.password || ''}
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
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default Login
