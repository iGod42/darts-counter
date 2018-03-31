import React from 'react'
import { connect } from 'react-redux'
import Scoreboard from './components/Scoreboard/index'
import './style.css'

const dummyScores = [
  {playerName: 'Player 1', points: 501, legs: 0},
  {playerName: 'Player 2', points: 501, legs: 0, didBegin: true},
  {playerName: 'Player 3', points: 501, legs: 0, theirTurn: true},
  {playerName: 'Player 4', points: 501, legs: 0}
]

const X01 = () => (
  <div className={`gameFrame`}>
    <div className={`scoreBoard`}>
      <Scoreboard playerScores={dummyScores}/>
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  ...ownProps
})

export default connect(mapStateToProps)(X01)