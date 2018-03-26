import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Button = ({text, action}) => (
  <button className="button" onClick={action}>{text}</button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func
}

export default Button
