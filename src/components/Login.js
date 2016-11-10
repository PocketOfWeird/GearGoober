import React, { PropTypes } from 'react'
import { Card, CardActions, CardText} from 'material-ui/Card'
import Logo from './Logo'

const Login = (FormFieldsContainer, FormActionContainer) => () => (
  <div>
    <Logo title="Gear Goober" subtitle="Login" />
    <Card>
      <CardText>
        <FormFieldsContainer>
          <div name='email' label='Email' />
          <div name='password' label='Password' />
        </FormFieldsContainer>
      </CardText>
      <CardActions>
        <FormActionContainer label='Login' />
      </CardActions>
    </Card>
  </div>
)

export default Login
