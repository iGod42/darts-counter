import React from 'react'
import './style.css'

const ScoreHeader = () => (
  <div className={`scoreHeader`}>
    <div className={`psNameHeader`}>Player</div>
    <div className={`psIconHeader`}></div>
    <div className={`psLegsHeader`}>Legs</div>
    <div className={`psPointsHeader`}>Points</div>
  </div>
)

export default ScoreHeader