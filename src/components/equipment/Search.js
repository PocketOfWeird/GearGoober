import React, { PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'


const Search = ({ search, handleKeyUp, handleChange, suggestions, results }) => (
  <div>
    <div className="searchbox">
      <input id='search' type='search' value={search}
              placeholder={search ? null: 'search'}
              onKeyUp={handleKeyUp}
              onChange={handleChange} />
    </div>
    {suggestions && suggestions.size >= 1 &&
      <div className='suggest'>
        <ul>
          {suggestions.map((sugg, i) =>
            <li key={i}>
              <a href={'#/equipment/details/' + sugg.get('_id')}>
                {sugg.get('name')}
              </a>
            </li>
          )}
        </ul>
      </div>
    }
    {results && results.size >= 1 &&
      <div className='results'>
        {results.map( (res, i) =>
          <div className='card' key={i}>
            <div className='photo-medium'>
              <img src={res.get('imageUrl')} />
            </div>
            <h4>
              <a href={'#/equipment/details/' + res.get('_id')}>
                {res.get('name')}
              </a>
            </h4>
            <p>
              Manufacturer: <strong>{res.get('mfg')}</strong><br/>
              Model: <strong>{res.get('model')}</strong><br/>
              Price: <strong>{res.get('price')}</strong><br/>
              {res.get('inKit') &&
                <span>
                  <i className='icon-briefcase'></i>
                  Kit Item
                </span>
              }
            </p>
            <a className='button' href={'#/reservations/:id/add/' + res.get('_id')}>
              <i className='icon-calendar-plus-o'></i>
              Reserve
            </a>
            <br />
            <a className='button' href={'#/settings/plans/:id/add/' + res.get('_id')}>
              <i className='icon-book'></i>
              Add to Plan
            </a>
          </div>
        )}
      </div>
    }
    <div className='spacer-six'></div>
  </div>
)

Search.propTypes = {
  search: PropTypes.string.isRequired,
  handleKeyUp: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  suggestions: ImmutablePropTypes.listOf(ImmutablePropTypes.map.isRequired),
  results: ImmutablePropTypes.listOf(ImmutablePropTypes.map.isRequired)
}

export default Search
