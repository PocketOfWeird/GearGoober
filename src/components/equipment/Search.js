import React from 'react'

const Search = () => (
  <div>
    <div className="searchbox">
      <input type='search' placeholder='search'></input>
    </div>
    {false &&
      <div className='suggest'>
        <ul>
          <li><a href='#/equipment/search/suggestion1'>Suggestion 1</a></li>
          <li><a href='#/equipment/search/suggestion2'>Suggestion 2</a></li>
          <li><a href='#/equipment/search/suggestion3'>Suggestion 3</a></li>
          <li><a href='#/equipment/search/suggestion4'>Suggestion 4</a></li>
          <li><a href='#/equipment/search/suggestion5'>Suggestion 5</a></li>
          <li><a href='#/equipment/search/suggestion6'>Suggestion 6</a></li>
          <li><a href='#/equipment/search/suggestion7'>Suggestion 7</a></li>
          <li><a href='#/equipment/search/suggestion8'>Suggestion 8</a></li>
          <li><a href='#/equipment/search/suggestion9'>Suggestion 9</a></li>
          <li><a href='#/equipment/search/suggestion10'>Suggestion 10</a></li>
        </ul>
      </div>
    }
    <div className='results'>
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

    </div>
  </div>
)

export default Search
