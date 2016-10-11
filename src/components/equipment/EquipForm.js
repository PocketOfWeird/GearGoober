import React, {PropTypes} from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import NumericInput from 'react-numeric-input'
import ReactSwipe from 'react-swipe'


const EquipForm = ({ mode, piece, handleChange, handlePriceChange, handleCancel }) => (
  <div className='container'>
    {mode==='add' &&
      <div>
        <h3>Add</h3>
        <label>
          <input type='checkbox' />
          <span className='label-body'>This is a Kit</span>
        </label>
      </div>
    }
    {mode==='edit' &&
      <h3>Edit</h3>
    }
    <form>
      <label>Name</label>
      <input className='u-full-width'
            id='name'
            type='text'
            value={piece.get('name') || ''}
            onChange={handleChange} />

      <label>Image</label>
      {mode==='add' &&
        <input type='file' />
      }
      {mode==='edit' &&
        <ReactSwipe>
          <div className='photo-medium'>
            <img src={piece.get('imageUrl')} />
          </div>
        </ReactSwipe>
      }
      <label>Category</label>
      {mode==='add' &&
        <select className='u-full-width'>
          <option value='audio'>Audio</option>
          <option value='audio-boom'>Audio-Boom Mics</option>
          <option value='cameras'>Cameras</option>
          <option value='cameras-lenses'>Cameras-Lenses</option>
        </select>
      }
      {mode==='edit' &&
        piece.get('category')
      }
      <label>Manufacturer</label>
      <input className='u-full-width'
            id='mfg'
            type='text'
            value={piece.get('mfg') || ''}
            onChange={handleChange} />

      {false &&
        <div className='suggest'>
          <ul>
            <li><a href='#/equipment/search/suggestion1'>Suggestion 1</a></li>
            <li><a href='#/equipment/search/suggestion2'>Suggestion 2</a></li>
            <li><a href='#/equipment/search/suggestion3'>Suggestion 3</a></li>
            </ul>
        </div>
      }
      <label>Model</label>
      <input className='u-full-width'
            id='model'
            type='text'
            value={piece.get('model') || ''}
            onChange={handleChange} />

      {false &&
        <div className='suggest'>
          <ul>
            <li><a href='#/equipment/search/suggestion1'>Suggestion 1</a></li>
            <li><a href='#/equipment/search/suggestion2'>Suggestion 2</a></li>
            <li><a href='#/equipment/search/suggestion3'>Suggestion 3</a></li>
            </ul>
        </div>
      }

      <label>Purchase Cost</label>
      <NumericInput min={0}
                    value={piece.get('price') || 0}
                    precision={2}
                    onChange={handlePriceChange} />

      <label>Barcodes</label>
      <div className='tags'>
        <input type='text' placeholder='add barcodes'></input>
        {piece.has('barcodes') && piece.get('barcodes').map(b =>
          <span className='tag' key={b.get('barcode')}>
            {b.get('barcode')}
            <i className='icon-cancel'></i>
          </span>
        )}
      </div>

      <div className='spacer-two'></div>
      {false &&
        <div>
          <label>Kit Pieces</label>
          <div className='tags'>
            <input type='text' placeholder='add pieces'></input>
            <span className='tag'>Canon 70D <input type='number' placeholder='QYT' /> <i className='icon-cancel'></i></span>
            <span className='tag'>Manfroto Tripod<input type='number' placeholder='QYT' /> <i className='icon-cancel'></i></span>
          </div>
          <div className='spacer-two'></div>
        </div>
      }
      <button className="button-primary">Save</button>
      <br />
      
      <button className="button-warning"
              onChange={handleCancel}>Cancel</button>

      {mode==='edit' &&
        <div>
          <button className="button-danger">Delete</button>
        </div>
      }
      <div className='spacer-six'></div>
    </form>

  </div>
)

EquipForm.propTypes = {
  mode: PropTypes.string.isRequired,
  piece: ImmutablePropTypes.map,
  handleChange: PropTypes.func.isRequired,
  handlePriceChange: PropTypes.func.isRequired
}

export default EquipForm
