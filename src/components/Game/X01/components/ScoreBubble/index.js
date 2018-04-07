import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const ScoreBubble = ({value, manuallyEntered, noOutshot, outshot}) => (
  <div className={`scoreBubble ${manuallyEntered ? 'manuallyEntered' : ''} ${noOutshot ? 'noOutshot' : ''} ${outshot ? 'outshot' : ''}`}>
    <span>
      {value}</span>
  </div>
)

ScoreBubble.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]).isRequired,
  manuallyEntered: PropTypes.bool,
  noOutshot: PropTypes.bool,
  outshot: PropTypes.bool
}

export default ScoreBubble