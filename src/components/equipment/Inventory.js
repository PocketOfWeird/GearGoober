import React from 'react'

const Inventory = () => (
  <div>
    <h3>Inventory</h3>
    <a className='button button-primary'
        href='#/settings/reports/equipment'>
      See Reports</a>
    <label>Scanning Location</label>
    <select className="u-full-width">
      <option value='craig'>Craig</option>
      <option value='strong'>Strong</option>
    </select>
    <input className='u-full-width' type='text'
    autoFocus placeholder='or start scanning equipment' />
    <table className="u-full-width">
      <thead>
        <tr>
          <th>Equipment</th>
          <th>Barcode</th>
          <th>Status</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dave Gamache</td>
          <td>26</td>
          <td>Male</td>
          <td>San Francisco</td>
        </tr>
        <tr>
          <td>Dwayne Johnson</td>
          <td>42</td>
          <td>Male</td>
          <td>Hayward</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default Inventory
