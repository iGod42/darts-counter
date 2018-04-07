import React from 'react'
import propTypes from 'prop-types'

import Button from '../../../../shared/Button'
import './style.css'

const Keyboard = ({nrPressed, enter, del}) => (
  <div className={`keyboard`}>
    <div className={`buttonRow`}>
      <Button text={'1'} action={() => nrPressed(1)}/>
      <Button text={'2'} action={() => nrPressed(2)}/>
      <Button text={'3'} action={() => nrPressed(3)}/>
    </div>
    <div className={`buttonRow`}>
      <Button text={'4'} action={() => nrPressed(4)}/>
      <Button text={'5'} action={() => nrPressed(5)}/>
      <Button text={'6'} action={() => nrPressed(6)}/>
    </div>
    <div className={`buttonRow`}>
      <Button text={'7'} action={() => nrPressed(7)}/>
      <Button text={'8'} action={() => nrPressed(8)}/>
      <Button text={'9'} action={() => nrPressed(9)}/>
    </div>
    <div className={`buttonRow`}>
      <Button text={'<'} action={del}/>
      <Button text={'0'} action={() => nrPressed(0)}/>
      <Button text={'↵'} action={enter}/>
    </div>
  </div>
)

Keyboard.propTypes = {
  nrPressed: propTypes.func.isRequired,
  enter: propTypes.func.isRequired,
  del: propTypes.func.isRequired
}



export default Keyboard