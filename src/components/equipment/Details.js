import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import ReactSwipe from 'react-swipe'
import NumericInput from 'react-numeric-input'

const Details = ({ piece }) => (
  <div>
    <p className='breadcrumb'><a href='#/equipment/search/'>Search</a> > Details</p>
    {piece &&
      <div>
          <ReactSwipe>
            <div className='photo-medium'>
              <img src={piece.get('imageUrl')} />
            </div>
          </ReactSwipe>

          <h3>{piece.get('name')}</h3>

          <p style={{marginBottom:'.25rem'}}>Availible: <strong>{piece.get('qty')}</strong></p>

          <label style={{fontWeight:'normal'}}>Requested:</label>
          <NumericInput mobile={true} min={1} value={1} max={piece.qty} />

          <a className='button button-primary' href={'#/reservations/:id/add/' + piece.get('_id')}>
            <i className='icon-calendar-plus-o'></i>
            Reserve
          </a>
          <br />
          <a className='button button-primary' href={'#/settings/plans/:id/add/' + piece.get('_id')}>
            <i className='icon-book'></i>
            Add to Plan
          </a>
          <p>
            Manufacturer: <strong>{piece.get('mfg')}</strong><br/>
            Model: <strong>{piece.get('model')}</strong><br/>
            Rental Price: <strong>{piece.get('price')}</strong><br/>
            {piece.inKit &&
              <span>
                <i className='icon-briefcase'></i>
                Kit Item
              </span>
            }
          </p>
          <a className='button button-primary'
            href={'#/equipment/edit/' + piece.get('_id')}>
            <i className='icon-pencil'></i>
            Edit
          </a>
          <div className='spacer-six'></div>
        </div>
      }
  </div>
)

Details.propTypes = {
  piece: ImmutablePropTypes.map
}


export default Details
