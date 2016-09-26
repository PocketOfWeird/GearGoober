import React, {PropTypes} from 'react'
import NumericInput from 'react-numeric-input'

const EquipForm = ({ mode }) => (
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
      <input className='u-full-width' type='text' placeholder='equipment name' />
      <label>Image</label>
      <input type='file' />
      <label>Category</label>
      <select className='u-full-width'>
        <option value='audio'>Audio</option>
        <option value='audio-boom'>Audio-Boom Mics</option>
        <option value='cameras'>Cameras</option>
        <option value='cameras-lenses'>Cameras-Lenses</option>
      </select>
      <label>Manufacturer</label>
      <input className='u-full-width' type='text' placeholder='equipment manufacturer' />
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
      <input className='u-full-width' type='text' placeholder='equipment model' />
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
      <NumericInput min={0} value={9.95} precision={2} />

      <label>Barcodes</label>
      <div className='tags'>
        <input type='text' placeholder='add barcodes'></input>
        <span className='tag'>123456 <i className='icon-cancel'></i></span>
        <span className='tag'>123456 <i className='icon-cancel'></i></span>
        <span className='tag'>123456 <i className='icon-cancel'></i></span>
        <span className='tag'>123456 <i className='icon-cancel'></i></span>
        <span className='tag'>123456 <i className='icon-cancel'></i></span>
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
      <button className="button-warning">Cancel</button>
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
  mode: PropTypes.string.isRequired
}

export default EquipForm
