import React from 'react'
import { connect } from 'react-redux'
import Scoreboard from './components/Scoreboard/index'
import Keyboard from './components/Keyboard'
import './style.css'

const dummyScores = [
  {playerName: 'Player 1', points: 501, legs: 0},
  {playerName: 'Player 2', points: 501, legs: 0, didBegin: true},
  {playerName: 'Player 3', points: 501, legs: 0, theirTurn: true},
  {playerName: 'Player 4', points: 501, legs: 0}
]

const X01 = ({currentScore}) => (
  <div className={`gameFrame`}>
    <div className={`gameLeft`}>
      <Scoreboard playerScores={dummyScores}/>
      <div className={`bottom`}>
        <div className={'main'}>
          <label>Current Score: </label>
          <div>{JSON.stringify(currentScore)}</div>
        </div>
        <div className={`leftKb`}>
          <Keyboard/>
        </div>
      </div>
    </div>
    <div className={`rightKb`}>
      <Keyboard/>
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  currentScore: state.x01.currentScore
})

export default connect(mapStateToProps)(X01)