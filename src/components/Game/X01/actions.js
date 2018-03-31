export const actionTypes = {
  NR_PRESSED: '@@x01:NR_PRESSED',
  DEL_PRESSED: '@@x01:DEL_PRESSED',
  ENTER_PRESSED: '@@x01:ENTER_PRESSED',
}

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

export default {enter, del, nrPressed}