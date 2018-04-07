import { actionTypes } from './actions'

const startGame = (state) => ({
  ...state,
  currentScore: 0,
  playerScores: state.players.map(player => ({
    player,
    throws: [],
    legsWon: 0
  })),
  toThrow: state.players[0],
  startedBy: state.players[0]
})

const gameReducer = (state, action) => {

  switch (action.type) {
    case actionTypes.SET_MODE:
      return {...state, selectedMode: action.mode}
    case actionTypes.START_GAME:
      return startGame(state)
    default:
      return state
  }
}

export default gameReducer
