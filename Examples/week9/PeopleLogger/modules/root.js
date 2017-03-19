import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

const Root = (props) => (
    <Provider store={props.store}>
        <Router routes={props.routes} history={props.history}/>
    </Provider>
)

export default Root