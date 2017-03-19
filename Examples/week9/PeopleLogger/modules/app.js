import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/profiles';

// modules
import Navbar from './layouts/navbar'

// app
let App = React.createClass({
    render() {
        return (
            <div>
                <Navbar/>
                {this.props.children}
            </div>
        )
    }
})

export default App