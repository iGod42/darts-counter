import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const GameSelection = () =>
  (
    <div>
      <Link to="/x01">x01</Link>
      <Link to="/cricket">cricket</Link>
    </div>
  )

const mapStateToProps = (state, ownProps = {}) => ownProps

export default connect(mapStateToProps, {})(GameSelection)
