import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import x01Reducer from './components/X01Setup/reducer'
import psReducer from './components/PlayerSelection/reducer'
import { actionTypes } from './actions'

const rootReducer = (state = {}, action) => {
  switch (action) {
    case actionTypes.START_GAME:
      return {...state, selectedMode: action.mode}
    default:
      return state
  }
}

export default combineReducers({
  rootReducer,
  router: routerReducer,
  x01Settings: x01Reducer,
  playerSelection: psReducer
})