import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Card, CardText, CardActions } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import Logo from './Logo'

const Registration = (FormFieldsContainer, FormActionContainer) => ({ tennant }) => (
  <div>
    <Logo title="Gear Goober" subtitle="Registration" />
    <Card>
      <CardText>
        <FormFieldsContainer>
          <div name='email' label='Your School Email' />
          <div name='password' label='Password' />
          <div name='passwordVerify' label='Enter Password Again' type='password' />
        </FormFieldsContainer>
      </CardText>
      <CardActions>
        <FormActionContainer label='Register' />
      </CardActions>
    </Card>
  </div>
)

Registration.propTypes = {
  tennant: PropTypes.string.isRequired
}

export default Registration
