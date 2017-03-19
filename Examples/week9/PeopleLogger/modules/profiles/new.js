// Store stuff
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from "../../actions/profiles"

// Presentation
import React from 'react'
import { browserHistory } from 'react-router'
import ProfileForm from './_profileForm'

let Show = React.createClass({
    handleSubmit(event){
        let defaultImage = "https://www.iconexperience.com/_img/i_collection_png/256x256/plain/person.png"
        let profiles = this.props.route.profiles
        let inputs = event.target.elements
        let lastId = parseInt(Object.keys(profiles).slice(-1)[0])
        let newId = lastId+1
        let newProfile = {id: newId, name: inputs[0].value, email: inputs[1].value, address: inputs[2].value, image: inputs[3].value || defaultImage, description: inputs[4].value}
        profiles[newId] = newProfile
        setTimeout(() => browserHistory.push('/'))
        event.preventDefault()
    },
    handleData(data){
        this.props.ProfileCreateAsync(data, (newProfile)=>{
            browserHistory.push(`/profiles/${newProfile._id}/show`)
        })
    },

    render() {
        return (<ProfileForm handleData = {this.handleData}/>)
    }
})

function mapStateToProps(state) {
  return {
    profiles: state.profiles,
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

Show = connect(mapStateToProps, mapDispatchToProps)(Show);

export default Show



