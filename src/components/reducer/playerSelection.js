import { actionTypes } from './actions'

const reducer = (state, action) => {
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
