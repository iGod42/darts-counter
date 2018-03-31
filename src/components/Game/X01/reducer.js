import { actionTypes } from './actions'

const defState = {
  currentScore: 0
}

const calcNewValue = (lastValue, enteredNr) => {
  if ((lastValue === 18 && enteredNr !== 0) || lastValue >= 180)
    return lastValue

  if (lastValue >= 19) {
    return parseInt(lastValue / 10, 10) * 10 + enteredNr
  }

  return lastValue * 10 + enteredNr
}

export default (state = defState, action) => {
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
    default:
      return state
  }
}

