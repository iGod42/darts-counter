const actionTypes = {
  SET_MODE: '@@GAME:SET_MODE',
  START_GAME: '@@GAME:START_GAME',
  UNDO: '@@GAME:UNDO',

  SET_PLAYERS: '@@PS:SET_PLAYERS',

  NR_PRESSED: '@@x01:NR_PRESSED',
  DEL_PRESSED: '@@x01:DEL_PRESSED',
  ENTER_PRESSED: '@@x01:ENTER_PRESSED',

  POINTS_CHANGED: '@@x01setup:POINTS_CHANGED',
  LEGS_CHANGED: '@@x01setup:LEGS_CHANGED',
  SETS_CHANGED: '@@x01setup:SETS_CHANGED'
}

const setPlayers = (nrOfPlayers) => ({
  type: actionTypes.SET_PLAYERS,
  nrOfPlayers
})

function setMode (mode) {
  return {
    type: actionTypes.SET_MODE,
    mode
  }
}

const startGame = () => ({
  type: actionTypes.START_GAME
})

const enter = () => ({
  type: actionTypes.ENTER_PRESSED
})
const del = () => ({
  type: actionTypes.DEL_PRESSED
})
const nrPressed = (number) => ({
  type: actionTypes.NR_PRESSED,
  number
})

const pointsChanged = (newPoints) => ({
  type: actionTypes.POINTS_CHANGED,
  newPoints
})
const legsChanged = (newLegs) => ({
  type: actionTypes.LEGS_CHANGED,
  newLegs
})
const setsChanged = (newSets) => ({
  type: actionTypes.SETS_CHANGED,
  newSets
})

const undo = () => ({
  type: actionTypes.UNDO
})

export { actionTypes }
export default {setMode, setPlayers, enter, del, startGame, nrPressed, pointsChanged, legsChanged, setsChanged, undo}