import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {actionTypes} from './actions'

const rootReducer = (state = {}, action) => {
    console.log('reduce', state, action)
    switch (action) {
        case actionTypes.START_GAME:
            return {...state, selectedMode: action.mode}
        default:
            return state
    }
}

export default combineReducers({
    rootReducer,
    router: routerReducer
})