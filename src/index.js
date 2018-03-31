import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './rootReducer'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router-dom'
import { persistReducer, persistStore } from 'redux-persist'

import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import App from './components/App'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

const history = createHistory()

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer,
  applyMiddleware(routerMiddleware(history)))

const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Route path="/" component={App}/>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
