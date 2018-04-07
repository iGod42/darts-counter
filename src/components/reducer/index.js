import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import x01Setup from './x01Setup'
import { actionTypes } from './actions'

import ps from './playerSelection'
import x01 from './x01'

const defState = {
  currentScore: 0,
  players: [],
  points: 501,
  legs: 3,
  sets: 1
}

const index = (state = defState, action) => {
  const region = action.type.split(':')[0]
  switch (region) {
    case '@@PS':
      return ps(state, action)
    case '@@x01':
      return x01(state, action)
    case '@@x01setup':
      return x01Setup(state, action)
  }

  switch (action.type) {
    case actionTypes.START_GAME:
      return {...state, currentScore: 0, selectedMode: action.mode}
    default:
      return state
  }
}

export default combineReducers({
  game: index,
  router: routerReducer,
})