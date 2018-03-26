import React from 'react'
import { Route, Switch } from 'react-router-dom'

import GameSelection from '../GameSelection'
import FourOhFour from '../FourOhFour'

import './style.css'

const App = () => (
  <div className="appFrame">
    <Switch>
      <Route exact path="/" component={GameSelection}/>
      <Route path="*" component={FourOhFour}/>
    </Switch>
  </div>
)

export default App
