import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import x01Setup from './x01Setup'

import ps from './playerSelection'
import x01 from './x01'
import game from './game'

const defState = {
  currentScore: 0,
  players: [],
  playerScores: [],
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
    default:
      return game(state, action)
  }
}

export default combineReducers({
  game: index,
  router: routerReducer,
})