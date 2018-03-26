import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Button } from '../shared'

const GameSelection = ({push}) =>
  (
    <div>
      <header>
        <h1>Start a new Game</h1>
      </header>
      <Button text="x01" action={() => push('/x01')}/>
      <Button text="cricket" action={() => push('/cricket')}/>
    </div>
  )

const mapStateToProps = (state, ownProps = {}) => ownProps

export default connect(mapStateToProps, {push})(GameSelection)
