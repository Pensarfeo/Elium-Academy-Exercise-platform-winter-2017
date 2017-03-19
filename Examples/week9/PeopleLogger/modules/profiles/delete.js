import React from 'react'
import { browserHistory } from 'react-router'

class Delete extends React.Component{
    constructor(){
        super();
        this.delete = this.delete.bind(this)
    }
    delete() {
    }
    componentWillMount(){
        delete this.props.route.profiles[parseInt(this.props.routeParams["id"])]
        browserHistory.push('/')
    }
    render(){
        return(<div></div>)
    }
}

export default Delete