const actionTypes = {
    START_GAME: 'START_GAME'
}

function startGame(mode) {
    return {
        type: actionTypes.START_GAME,
        mode
    }
}

export {actionTypes}
export default {startGame}