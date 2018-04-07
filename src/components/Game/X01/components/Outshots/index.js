import React from 'react'
import Outshot from './Outshot'
import './outshot.css'

const Outshots = ({outshots}) => (
  <div>
    {outshots.length > 0 ?
      outshots.slice(0, 3).map(outshot => <Outshot key={outshot.join(',')} outshot={outshot}/>) :
      <div className={'noOutshot'}>No Outshots</div>}
  </div>
)

export default Outshots