export const actionTypes = {
    POINTS_CHANGED: '@x01setup//POINTS_CHANGED',
    LEGS_CHANGED: '@x01setup//LEGS_CHANGED',
    SETS_CHANGED: '@x01setup//SETS_CHANGED'
}

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

export default {pointsChanged,legsChanged,setsChanged}
