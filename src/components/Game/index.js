import React from 'react'
import { connect } from 'react-redux'

import X01 from './X01'

const Game = ({mode}) => (
  <div>
    {mode === 'x01' ? <X01/> : <div>Mode not supported</div>}
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  mode: state.game.selectedMode,
  state,
  //state,
})

export default connect(mapStateToProps)(Game)