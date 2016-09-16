/**
 * @file index.js
 */
var React = require('react');
var ReactDOM = require('react-dom');
import { createStore } from 'redux';

// redux reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// React component
const Counter = ({ 
  value,
  onIncrement,
  onDecrement 
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

// redux store
const store = createStore(counter);


// React render to dom
const render = () => {
  ReactDOM.render( 
    <Counter 
      value={store.getState()} 
      onIncrement={() => 
        store.dispatch({ type: 'INCREMENT'})
      }
      onDecrement={() => 
        store.dispatch({ type: 'DECREMENT'})
      }  
    />,
    document.getElementById('main')
  );
};

store.subscribe(render);
render();