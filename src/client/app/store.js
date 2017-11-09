import { createStore } from 'redux'
import rootReducer from './reducers/index.js'

var initialStoreState = {}

const store = createStore(
  rootReducer,
  initialStoreState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store