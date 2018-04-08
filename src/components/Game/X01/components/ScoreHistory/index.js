import React from 'react'
import './style.css'
import Button from '../../../../shared/Button'
import PropTypes from 'prop-types'

const ScoreHistory = ({throws, maxScores, undo}) => {
  const throwsToDisplay = throws.slice(maxScores * -1)
  return (
    <div className={`scoreHistory`}>
      <div className={`histScores`}>
        {throwsToDisplay.map((thr, index) => (
          <span className={`scoreHistoryThrow ${index + 1 === throwsToDisplay.length ? 'lastScore' : ''}`}
                key={index}>{thr}</span>))}
      </div>
      {undo ? <div className={'undoButton'}>
        <Button text={'↺'}/>
      </div> : null}
    </div>)
}

ScoreHistory.propTypes = {
  throws: PropTypes.arrayOf(PropTypes.number).isRequired,
  maxScores: PropTypes.number.isRequired,
  undo: PropTypes.func
}

ScoreHistory.defaultProps = {
  maxScores: 5
}

export default ScoreHistory