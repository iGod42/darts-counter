import React from 'react'
import { connect } from 'react-redux'

import X01 from './X01'

const Game = ({mode}) => {
  switch (mode) {
    case 'x01':
      return <X01/>
    default:
      return <div>Mode not supported</div>
  }
}

const mapStateToProps = (state, ownProps) => ({
  mode: state.game.selectedMode,
  state,
  //state,
})

export default connect(mapStateToProps)(Game)