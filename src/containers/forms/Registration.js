import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import Logo from '../../components/shared/Logo'

const Registration = ({ tennant }) => (
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
          value={''}
          errorText={''}
        />
      </CardText>
    </Card>
  </div>
)

Registration.propTypes = {
  tennant: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  tennant: state.view.current[1]
})

export default connect(mapStateToProps)(Registration)
