import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './rootReducer'
import { Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'

import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import App from './components/App'

const history = createHistory()

const store = createStore(rootReducer,
  applyMiddleware(routerMiddleware(history)))

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
