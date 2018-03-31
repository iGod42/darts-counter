import React from 'react'
import { Route, Switch } from 'react-router-dom'

import GameSelection from '../GameSelection'
import FourOhFour from '../FourOhFour'
import PlayerSelection from '../PlayerSelection'
import X01Setup from '../X01Setup'
import Game from '../Game'

import './style.css'

const App = () => (
  <div className="appFrame">
    <Switch>
      <Route exact path="/" component={GameSelection}/>
      <Route path="/player-selection" component={PlayerSelection}/>
      <Route path="/x01" component={X01Setup}/>
      <Route path="/game" component={Game}/>
      <Route path="*" component={FourOhFour}/>
    </Switch>
  </div>
)

export default App
