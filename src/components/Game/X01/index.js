import React from 'react'
import { connect } from 'react-redux'
import Scoreboard from './components/Scoreboard/index'
import actions from '../../reducer/actions'
import Keyboard from './components/Keyboard'
import ScoreBubble from './components/ScoreBubble'
import Outshots from './components/Outshots'

import * as tools from './tools'

import './style.css'
import ScoreHistory from './components/ScoreHistory'

const X01 = ({currentScore, del, enter, nrPressed, playerScores, scoreEnteredManually, scoreToDisplay, toThrow, outshots, currentPlayerScore ,undo}) => (
  <div className={`gameFrame`}>
    <div className={`gameLeft`}>
      <div className={`scoreBoard`}>
        <Scoreboard playerScores={playerScores}/>
        <div className={'scoreHistory'}>
          <ScoreHistory throws={currentPlayerScore.throws} undo={undo}/>
        </div>
      </div>
      <div className={`bottom`}>
        <div className={'main'}>
          <div className={`theScore`}>
            <div className={`playerStats`}>
              <div className={`myScore`}>
                <span className={`playerName`}>{toThrow}</span>
                <ScoreBubble value={scoreToDisplay} manuallyEntered={scoreEnteredManually}/>
              </div>
              <div className={`outshots`}>
                <Outshots outshots={outshots}/>
              </div>
            </div>
          </div>
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
  const currentPlayerScore = state.game.playerScores.find(ps => ps.player === state.game.toThrow)
  const currentPlyerPoints = (state.game.points - currentPlayerScore.throws.reduce((sum, cur) => sum + cur, 0))
  return ({
    ...ownProps,
    currentScore: state.game.currentScore,
    playerScores: state.game.playerScores.map(createPS(state.game.points, state.game.startedBy, state.game.toThrow)),
    currentPlayerScore,
    scoreEnteredManually: state.game.currentScore !== 0,
    scoreToDisplay: state.game.currentScore !== 0 ? state.game.currentScore : (state.game.points - state.game.playerScores.find(ps => ps.player === state.game.toThrow).throws.reduce((sum, cur) => sum + cur, 0)),
    toThrow: state.game.toThrow,
    outshots: tools.getOutshots(currentPlyerPoints)
  })
}

export default connect(mapStateToProps, actions)(X01)