import { actionTypes } from './actions'

const calcRemainder = (points, throws) => points - throws.reduce((sum, current) => current + sum, 0)

const captureScore = (state) => {
  const theScore = JSON.parse(JSON.stringify(state.playerScores.find(ps => ps.player === state.toThrow)))

  const remainingPoints = calcRemainder(state.points, theScore.throws)

  if (state.currentScore === remainingPoints) {
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
  else if (state.currentScore >= remainingPoints - 1) {
    window.alert('Score too high')
    return state
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

const nrPressed = (state, action) => {
  const currentScore = state.playerScores.find(ps => ps.player === state.toThrow)
  const remainder = calcRemainder(state.points, currentScore.throws)

  const lastValue = state.currentScore
  const enteredNr = action.number

  let newValue = 0

  if ((lastValue === 18 && enteredNr !== 0) || lastValue >= 180)
    newValue = lastValue
  else if (lastValue >= 19)
    newValue = parseInt(lastValue / 10, 10) * 10 + enteredNr
  else
    newValue = lastValue * 10 + enteredNr

  if (newValue > remainder)
    newValue = lastValue

  return {
    ...state, currentScore: newValue
  }
}

export default (state, action) => {
  switch (action.type) {
    case actionTypes.NR_PRESSED:
      return nrPressed(state, action)
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

