import React from 'react'
import PropTypes from 'prop-types'
import './outshot.css'

const Throw = ({text, isDouble}) => (
    <span className={`outshotThrow  ${isDouble ? 'doubleOut' : ''}`}>{text}</span>
)

const Outshot = ({outshot}) => (
  <div className={`outshot`}>
    {outshot.map(thr => <Throw key={thr} text={thr} isDouble={thr.startsWith('D')}/>)}
  </div>)

Outshot.propTypes = {
  outshot: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Outshot