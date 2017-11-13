import { combineReducers } from 'redux'

import componentsList from './components-list.js'
import renderComponent from './render-component.js'


const rootReducer = combineReducers({
  componentsList,
  renderComponent
})

export default rootReducer;