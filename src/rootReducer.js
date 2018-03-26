import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const rootReducer = (state = {}, action) => {
  switch (action) {
    default:
      return state
  }
}

export default combineReducers({
  rootReducer,
  router: routerReducer
})