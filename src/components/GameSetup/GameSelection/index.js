import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Button } from '../../shared/index'
import './style.css'

const GameSelection = ({push}) =>
  (
    <div>
      <div className={`gameSelect`}>
        <Button big text="x01" action={() => push('/x01')}/>
        <Button big text="cricket" action={() => push('/cricket')}/>
      </div>
    </div>
  )

const mapStateToProps = (state, ownProps = {}) => ownProps

export default connect(mapStateToProps, {push})(GameSelection)
