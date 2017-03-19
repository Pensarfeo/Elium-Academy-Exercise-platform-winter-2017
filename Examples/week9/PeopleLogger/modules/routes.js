// modules/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux';
import App from './app'
import Navbar from './layouts/navbar'
import ProfileNew from './profiles/new'
import ProfileShow from './profiles/show'
import ProfileEdit from './profiles/edit'
import ProfileDelete from './profiles/delete'
import ProfileIndex from './profiles/index'

//import Profile from './Profile'
//import Profiles from './Profiles'

module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={ProfileIndex} />
        <Route path="/profiles/:id/show"   component={ProfileShow}    ></Route>
        <Route path="/profiles/:id/delete" component={ProfileDelete}  ></Route>
        <Route path="/profiles/:id/edit"   component={ProfileEdit}    ></Route>
        <Route path="/profiles/new"        component={ProfileNew}     ></Route>
    </Route>
)