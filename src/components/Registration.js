import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import map from 'lodash.map'
import { Card, CardText, CardActions } from 'material-ui/Card'
import Logo from './Logo'

const Registration = (FormFieldsContainer,
  FormActionContainer, FormSelectContainer) => ({ groups }) => (
  <div>
    <Logo title="Gear Goober" subtitle="Registration" />
    <Card>
      <CardText>
        <FormFieldsContainer>
          <div name='firstName' label='First Name' />
          <div name='lastName' label='Last Name' />
          <div name='phone' label='Phone' type='tel' />
        </FormFieldsContainer>
        <FormSelectContainer
          name='group'
          label='Select a Group'
        >
          {map(groups, (group, key) =>
            <div
              key={key}
              value={group.id}
              name={group.name}
              subName={'Instructor: ' + group.leaderName}
            />
          )}
        </FormSelectContainer>
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
  groups: PropTypes.object.isRequired
}

export default Registration
