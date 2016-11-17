import React from 'react'
import map from 'lodash.map'


export const formSelectMap = (collection,
  subNameFunction=undefined, id='id', name='name') => {
  return map(collection, (object, key) =>
    <div
      key={key}
      value={object[id]}
      name={object[name]}
      subName={ subNameFunction !== undefined ? subNameFunction(object) : ''}
    />
  )
}
