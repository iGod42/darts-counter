import React from 'react'
import { connect } from 'react-redux'
import Scoreboard from './components/Scoreboard/index'
import actions from '../../reducer/actions'
import Keyboard from './components/Keyboard'
import './style.css'

const X01 = ({currentScore, del, enter, nrPressed, playerScores}) => (
  <div className={`gameFrame`}>
    <div className={`gameLeft`}>
      <Scoreboard playerScores={playerScores}/>
      <div className={`bottom`}>
        <div className={'main'}>
          <label>Current Score: </label>
          <div>{JSON.stringify(currentScore)}</div>
        </div>
        <div className={`leftKb`}>
          <Keyboard del={del} enter={enter} nrPressed={nrPressed}/>
        </div>
      </div>
    </div>
    <div className={`rightKb`}>
      <Keyboard del={del} enter={enter} nrPressed={nrPressed}/>
    </div>
  </div>
)

const createPS = (targetScore, startedBy, toThrow) => (ps) => ({
  playerName: ps.player,
  points: targetScore - ps.throws.reduce((total, num) => total + num, 0),
  legs: ps.legsWon,
  didBegin: ps.player === startedBy,
  theirTurn: ps.player === toThrow
})

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return ({
    ...ownProps,
    currentScore: state.game.currentScore,
    playerScores: state.game.playerScores.map(createPS(state.game.points, state.game.startedBy, state.game.toThrow))
  })
}

export default connect(mapStateToProps, actions)(X01)