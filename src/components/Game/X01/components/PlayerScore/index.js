import React from 'react'
import PlayerScoreType from '../PlayerScoreType'
import './style.css'

const PlayerScore = ({playerScore}) => {
  const {playerName, points, legs, didBegin, theirTurn} = playerScore

  return (
    <div className={`playerScore`}>
      <div className={`psColumn psName`}>
        <div>{playerName}</div>
      </div>
      <div
        className={`psColumn psIcon ${theirTurn ? 'activePlayer' : ''}`}>{didBegin ? '✘' : (theirTurn ? '➤' : '')}</div>
      <div className={`psColumn psLegs`}>
        <div>{legs}</div>
      </div>
      <div className={`psColumn psPoints`}>
        <div>{points}</div>
      </div>
    </div>
  )
}

PlayerScore.propTypes = {playerScore: PlayerScoreType}

export default PlayerScore