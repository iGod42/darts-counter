import { actionTypes } from './actions'

const startState = {
  players: []
}

const reducer = (state = startState, action) => {
  switch (action.type) {
    case actionTypes.SET_PLAYERS: {
      return {
        ...state,
        players: Array.from(Array(parseInt(action.nrOfPlayers, 10)).keys()).map(nr => `Player ${nr + 1}`)
      }
    }
    default:
      return state
  }
}

export default reducer
