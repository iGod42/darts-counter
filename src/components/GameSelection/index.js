import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Button } from '../shared/index'

import actions from '../reducer/actions'

import './style.css'

const GameSelection = ({push, setMode}) =>
  (
    <div className={`gameSelect`}>
      <h1 className={`mainHeader`}>Choose your Game!</h1>
      <div className={`gameOptions`}>
        <Button big text="x01" action={() => {
          setMode('x01')
          push(`x01`)
        }}/>
        <Button big text="cricket" action={() => {
          setMode('cricket')
          push(`dummy404xxxblah`)
        }}/>
      </div>
    </div>
  )

const mapStateToProps = (state, ownProps = {}) => ownProps

export default connect(mapStateToProps, {...actions, push})(GameSelection)
