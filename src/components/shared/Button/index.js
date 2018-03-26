import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Button = ({text, action, big}) => (
  <button className={`button ${big ? 'big' : ''}`} onClick={action}>{text}</button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
  big: PropTypes.bool
}

export default Button
