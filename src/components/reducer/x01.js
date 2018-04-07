import { actionTypes } from './actions'

const calcNewValue = (lastValue, enteredNr) => {
  if ((lastValue === 18 && enteredNr !== 0) || lastValue >= 180)
    return lastValue

  if (lastValue >= 19) {
    return parseInt(lastValue / 10, 10) * 10 + enteredNr
  }

  return lastValue * 10 + enteredNr
}

const captureScore = (status) => {
  const theScore = JSON.parse(JSON.stringify(status.playerScores.find(ps => ps.player === status.toThrow)))
  theScore.throws.push(status.currentScore)

  const nextIndex = status.players.indexOf(status.toThrow) + 1
  const nextPlayer = status.players.length < nextIndex + 1 ? status.players[0] : status.players[nextIndex]

  return {
    ...status,
    currentScore: 0,
    toThrow: nextPlayer,
    playerScores: status.playerScores.map(ps => ps.player === theScore.player ? theScore : ps)
  }
}

export default (state, action) => {
  switch (action.type) {
    case actionTypes.NR_PRESSED:
      return {
        ...state, currentScore: calcNewValue(state.currentScore, action.number)
      }
    case actionTypes.DEL_PRESSED:
      return {
        ...state,
        currentScore: parseInt(state.currentScore / 10, 10)
      }
    case actionTypes.ENTER_PRESSED:
      return captureScore(state)
    default:
      return state
  }
}

