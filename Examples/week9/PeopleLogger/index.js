import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

/* Import our data store */
import Configure from './storage/configure';

// modules
import Routes from './modules/routes'
import Root from './modules/root'
// Start Store
const {store, history} = Configure()

// style

require('!style!css!sass!./assets/styles/bootstrap/_bootstrap.scss')
require('!style!css!sass!./assets/styles/app.scss')


//Initial Request
import {FetchProfilesAsync} from './actions/profiles.js'

store.dispatch(FetchProfilesAsync())

render(
    <Root store = {store} history = {history} routes = {Routes}/>,
    document.getElementById('app')
)

//<Root store = {store} history = {history} routes = {Routes}/>