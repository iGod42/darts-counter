import React from 'react'
import PropTypes from 'prop-types'
import PlayerScoreType from '../PlayerScoreType'
import PlayerScore from '../PlayerScore'
import ScoreHeader from '../ScoreHeader'
import './style.css'

const Scoreboard = ({playerScores}) => (
  <div className={`sbFrame`}>
    <ScoreHeader/>
    {
      playerScores.map(ps => <PlayerScore key={ps.playerName} playerScore={ps}/>)
    }
  </div>
)

Scoreboard.propTypes = {
  playerScores: PropTypes.arrayOf(PlayerScoreType).isRequired
}

export default Scoreboard