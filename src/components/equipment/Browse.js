import React from 'react'

const Browse = () => (
  <div>
    <p className='breadcrumb'>
      <a href='#/equipment/browse/'>Browse</a>
      > Current Category
    </p>
    <button className='button-primary category'>Audio</button>
    <button className='button-primary category'>Cameras</button>
    <button className='button-primary category'>Grip</button>


    <div className='card'>
      <div className='photo-medium'>
        <img src='images/10018_thumb.jpg' />
      </div>
      <h4><a href='#/equipment/details/:id'>Canon 70D</a></h4>
      <p>
        Manufacturer: <strong>Canon</strong><br/>
        Model: <strong>EOS 70D</strong><br/>
        Price: <strong>$1,500</strong><br/>
        {true &&
          <span>
            <i className='icon-briefcase'></i>
            Kit Item
          </span>
        }
      </p>
      <a className='button' href='#/reservations/:id/add/:productId'>
        <i className='icon-calendar-plus-o'></i>
        Reserve
      </a>
      <br />
      <a className='button' href='#/settings/plans/:id/add/:productId'>
        <i className='icon-book'></i>
        Add to Plan
      </a>
    </div>
    <div className='spacer-six'></div>
  </div>
)

export default Browse
