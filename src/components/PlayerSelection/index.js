import React from 'react'
import actions from './actions'
import { connect } from 'react-redux'
import Button from '../shared/Button'
import { push } from 'react-router-redux'

const PlayerSelection = ({setPlayers, push}) => (
  <div>
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
)

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
})

export default connect(mapStateToProps, {...actions, push})(PlayerSelection)