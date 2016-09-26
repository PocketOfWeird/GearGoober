import React from 'react'
import ReactSwipe from 'react-swipe'
import NumericInput from 'react-numeric-input'

const Details = () => (
  <div>
  <p className='breadcrumb'><a href='#/equipment/search/'>Search</a> > Details</p>
    <ReactSwipe>
      <div className='photo-medium'>
        <img src='images/10018_thumb.jpg' />
      </div>
      <div className='photo-medium'>
        <img src='images/10161_thumb.jpg' />
      </div>
      <div className='photo-medium'>
        <img src='images/10192_thumb.jpg' />
      </div>
    </ReactSwipe>

    <h3>Canon 70D</h3>

    <p style={{marginBottom:'.25rem'}}>Availible: <strong>7</strong></p>

    <label style={{fontWeight:'normal'}}>Requested:</label>
    <NumericInput mobile={true} min={1} value={1} max={7} />

    <a className='button button-primary' href='#/reservations/:id/add/:productId'>
      <i className='icon-calendar-plus-o'></i>
      Reserve
    </a>
    <br />
    <a className='button button-primary' href='#/settings/plans/:id/add/:productId'>
      <i className='icon-book'></i>
      Add to Plan
    </a>
    <p>
      Manufacturer: <strong>Canon</strong><br/>
      Model: <strong>EOS 70D</strong><br/>
      Rental Price: <strong>$1,500</strong><br/>
      {true &&
        <span>
          <i className='icon-briefcase'></i>
          Kit Item
        </span>
      }
    </p>
    <a className='button button-primary' href='#/equipment/edit/:id'>
      <i className='icon-pencil'></i>
      Edit
    </a>
    <div className='spacer-six'></div>
  </div>
)

export default Details
