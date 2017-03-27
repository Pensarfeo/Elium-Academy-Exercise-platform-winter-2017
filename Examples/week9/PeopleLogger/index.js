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



