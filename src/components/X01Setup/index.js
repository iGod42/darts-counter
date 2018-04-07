import React from 'react'

import { connect } from 'react-redux'
import actions from '../reducer/actions'
import { push } from 'react-router-redux'
import Button from '../shared/Button'

import './style.css'

const X01Setup = ({points, legs, sets, pointsChanged, legsChanged, setsChanged, startGame, push}) => (
  <div className={`x01`}>
    <h1 className={`mainHeader`}>Game Setup</h1>
    <div className={`theForm`}>
      <div className={`inputs`}>
        <div className={`formRow`}>
          <label htmlFor="points">Points</label>
          <select value={points} onChange={(e) => {
            pointsChanged(e.target.value)
          }}>
            {
              Array.from(Array(15).keys())
              .map(nr => 101 + 100 * nr)
              .map(pm => <option key={pm} value={pm}>{pm}</option>)
            }
          </select>
        </div>
        <div className={`formRow`}>
          <label htmlFor="legs">Legs</label>
          <select value={legs} onChange={(e) => {
            legsChanged(e.target.value)
          }}>
            {
              Array.from(Array(21).keys())
              .slice(1)
              .map(legs => <option key={legs} value={legs}>{legs}</option>)
            }
          </select>
        </div>
        <div className={`formRow`}>
          <label htmlFor="sets">Sets</label>
          <select value={sets} onChange={(e) => {
            setsChanged(e.target.value)
          }}>
            {
              Array.from(Array(21).keys())
              .slice(1)
              .map(sets => <option key={sets} value={sets}>{sets}</option>)
            }
          </select>
        </div>
      </div>
      <div className={`submitButton`}>
        <Button text="Select Players" action={() => {
          startGame('x01')
          push(`player-selection`)
        }}/>
      </div>
    </div>
  </div>
)

// const X01Setup = () => (
//     <X01Form handleSubmit={() => push('player-selection')}/>
// )

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.game
})

export default connect(mapStateToProps, {...actions, push})(X01Setup)
