import { actionTypes } from './actions'

const calcNewValue = (lastValue, enteredNr) => {
  if ((lastValue === 18 && enteredNr !== 0) || lastValue >= 180)
    return lastValue

  if (lastValue >= 19) {
    return parseInt(lastValue / 10, 10) * 10 + enteredNr
  }

  return lastValue * 10 + enteredNr
}

const captureScore = (state) => {
  const theScore = JSON.parse(JSON.stringify(state.playerScores.find(ps => ps.player === state.toThrow)))

  const remainingPoints = state.points - theScore.throws.reduce((sum, current) => current + sum, 0)

  if (state.currentScore > remainingPoints) {
    window.alert('Score too high')
    return state
  }
  else if (state.currentScore === remainingPoints) {
    const nextStartIndex = state.players.indexOf(state.startedBy) + 1
    const nextStarter = state.players.length < nextStartIndex + 1 ? state.players[0] : state.players[nextStartIndex]

    window.alert(`Congratulations ${state.toThrow} won`)

    return {
      ...state,
      currentScore: 0,
      playerScores: state.playerScores.map(ps => ({
        ...JSON.parse(JSON.stringify(ps)),
        throws: [],
        legsWon: ps.player === state.toThrow ? ps.legsWon + 1 : ps.legsWon
      })),
      startedBy: nextStarter,
      toThrow: nextStarter
    }
  }
  const nextIndex = state.players.indexOf(state.toThrow) + 1
  const nextPlayer = state.players.length < nextIndex + 1 ? state.players[0] : state.players[nextIndex]

  theScore.throws.push(state.currentScore)

  return {
    ...state,
    currentScore: 0,
    toThrow: nextPlayer,
    playerScores: state.playerScores.map(ps => ps.player === theScore.player ? theScore : ps)
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

