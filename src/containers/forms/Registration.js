import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import Logo from '../../components/shared/Logo'

const Registration = ({ user }) => (
  <div>
    <Logo title='Gear Goober' />
    <Card>
      <CardHeader
        title='Registration'
        subtitle='We need some info, please :)'
      />
      <CardText>
        <TextField
          name='email'
          type='email'
          floatingLabelText='Your School Email'
          fullWidth={true}
          value={values.get('email') || ''}
          errorText={errors.get('email') || ''}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </CardText>
    </Card>
  </div>
)

Registration.propTypes = {
  user: PropTypes.object
}

const mapStateToProps = state => ({
  user: state.data.user
})

export default connect(mapStateToProps)(Registration)
