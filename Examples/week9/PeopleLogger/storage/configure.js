// storage tools
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';
import profiles from '../data/data';

//import promise from 'redux-promise'
//import logger from 'redux-logger'

/*
store.dispatch = logger(store)(store.dispatch)
#=> (action) => {loggerfunctionality} // loggerFinalFunction
promiseFinalFunction = promise(store)(loggerFinalFunction) 

promise= ifPromise ? action.then(next[loggerFinalFunction]) : next(action)

if promise is a Promise then execute the promise first. If its an action execute the action chain normally.
*/

const configure = () =>{
    // get initial state
    //const defaultState = {  profiles: profiles }

    // Create Store
    const middlewares = [thunkMiddleware]; //logger - we don't add it because we have devtools
    const enhancers = compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );

    const store = createStore(combineReducers({profiles: rootReducer, routing: routerReducer}), enhancers)

    // Sinc browser history with store
    const history = syncHistoryWithStore(browserHistory, store);

    // save store to local
    // store.subscribe(() => saveState({profiles: store.getState().profiles}))
    return {store, history}
} 

export default configure;