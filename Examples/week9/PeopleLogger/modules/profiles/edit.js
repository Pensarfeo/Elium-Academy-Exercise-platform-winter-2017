// Store stuff
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from "../../actions/profiles"

// Presentation stuff
import React from 'react'
import { browserHistory } from 'react-router'
import ProfileForm from './_profileForm'
import Profiles from "../../data/profiles"


// components
import ProfileTab from "./_profileTab.js"

const current = (scope) => {
    return scope.props.profiles.filter( (ele) => ele._id == scope.props.routeParams["id"])[0]
};


class Edit extends React.Component{
    handleData(data){
        const profile = current(this)
        Object.keys(data).map( ( key ) => {
            let fallback = (key == "description" ? profile[key] : data[key])
            data[key] = data[key] || fallback
        })
        data._id = profile._id
        this.props.ProfileEditAsync(data, () => {
             browserHistory.push(`/profiles/${this.props.routeParams["id"]}/show`)
        })
    }

    componentWillMount(){
        this.current = current(this)
    }

    componentDidMount(){
        if (!this.current){
            browserHistory.push(`/`)
        }
    }

    render() {
        const nametagStyle = {display: "inline-block", float: "right", marginTop: -66}
        if (this.current){
            return (
                <div>
                    <ul className="nav nav-tabs" style={nametagStyle}>
                        <li role="presentation" className="active">
                            <a>{this.current.name}</a>
                        </li>
                    </ul>
                    <ProfileForm handleData = {this.handleData.bind(this)} {...this.current}/>
                </div>
            )
        } else {
            return <div/>
        }
    }
}


const mapStateToProps = (state) => ({ profiles: state.profiles })

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

Edit = connect(mapStateToProps, mapDispatchToProps)(Edit);

export default Edit