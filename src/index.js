/**
 * @file index.js
 */
import { createStore } from 'redux'

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

// redux store
let store = createStore(counter);

const render = () => {
  document.getElementById('main').innerText = store.getState();
}

store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});