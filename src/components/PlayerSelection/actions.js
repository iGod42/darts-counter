export const actionTypes = {
  SET_PLAYERS: '@@PS:SET_PLAYERS'
}

const setPlayers = (nrOfPlayers) => ({
  type: actionTypes.SET_PLAYERS,
  nrOfPlayers
})

export default {setPlayers}