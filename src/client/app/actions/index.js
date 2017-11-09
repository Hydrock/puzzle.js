import store from '../store.js';

export function getComponents(obj) {
  store.dispatch({
    type: 'get-components',
    payload: obj
  })
}