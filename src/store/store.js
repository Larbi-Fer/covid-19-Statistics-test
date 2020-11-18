import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import cartReduer from './reducers'
import thunk from 'redux-thunk';

var state = {
    All: []
}

const appReducers = combineReducers({
    All: cartReduer
})

const store = createStore(appReducers, state, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store