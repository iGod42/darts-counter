import { actionTypes } from './actions'

export default (state, action) => {
  switch (action.type) {
    case actionTypes.SETS_CHANGED:
      return {...state, sets: action.newSets}
    case actionTypes.POINTS_CHANGED:
      return {...state, points: action.newPoints}
    case actionTypes.LEGS_CHANGED:
      return {...state, legs: action.newLegs}
    default:
      return state
  }
}
