import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Button = ({text, action, big, type, disabled}) => (
  <button className={`button ${big ? 'big' : ''}`} onClick={action} disabled={disabled} type={type}>{text}</button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
  big: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(
    ['button', 'submit', 'reset']
  )
}
Button.defaultProps = {
  disabled: false,
  type: 'button'
}

export default Button
