import React from 'react'
import actions from '../reducer/actions'
import { connect } from 'react-redux'
import Button from '../shared/Button'
import { push } from 'react-router-redux'
import './style.css'

const PlayerSelection = ({setPlayers, push}) => (
  <div>
    <h1 className={`mainHeader`}>Select Players</h1>
    <div className={`playerSel`}>
      {
        Array.from(Array(4).keys())
        .map(nr => '' + (nr + 1))
        .map(nr => <Button text={nr} key={nr}
                           action={() => {
                             setPlayers(nr)
                             push('game')
                           }}/>)
      }
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
})

export default connect(mapStateToProps, {...actions, push})(PlayerSelection)