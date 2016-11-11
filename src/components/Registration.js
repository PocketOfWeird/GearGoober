import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Card, CardText, CardActions } from 'material-ui/Card'
import Logo from './Logo'

const Registration = (FormFieldsContainer,
  FormActionContainer, FormSelectContainer) => ({ groups }) => (
  <div>
    <Logo title="Gear Goober" subtitle="Registration" />
    <Card>
      <CardText>
        <FormFieldsContainer>
          <div name='email' label='Your School Email' />
          <div name='password' label='Password' />
          <div name='passwordVerify' label='Enter Password Again' type='password' />
        </FormFieldsContainer>
        <FormSelectContainer
          name='group'
          label='Select a Group'
        >
          {groups.map((group, key) =>
            <div
              key={key}
              value={group.id}
              name={group.name}
              subName={'Instructor: ' + group.leaderName}
            />
          )}
        </FormSelectContainer>
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
