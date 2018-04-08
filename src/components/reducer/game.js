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

const undo = (state) => {
  const curIndex = state.players.indexOf(state.toThrow)
  const lastThrower = state.players[curIndex === 0 ? state.players.length - 1 : curIndex - 1]

  const theScore = state.playerScores.find(ps => ps.player === lastThrower)

  if (theScore.throws.length === 0)
    return state

  const fixedScore = {
    ...theScore,
    throws: JSON.parse(JSON.stringify(theScore.throws)).slice(0, -1)
  }

  return {
    ...state,
    currentScore: 0,
    toThrow: lastThrower,
    playerScores: state.playerScores.map(ps => ps.player === lastThrower ? fixedScore : ps)
  }
}

const gameReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_MODE:
      return {...state, selectedMode: action.mode}
    case actionTypes.START_GAME:
      return startGame(state)
    case actionTypes.UNDO:
      return undo(state)
    default:
      return state
  }
}

export default gameReducer
