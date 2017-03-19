// Store stuff
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from "../../actions/profiles"

// presentation stuff
import React from 'react'
import {Component} from 'react'
import {Grid, Row, Thumbnail, Button, Col} from 'react-bootstrap'
import { browserHistory } from 'react-router'
import Iframe from "react-iframe"

// components
import ProfileTab from "./_profileTab.js"
import Picture from "./_picture.js"


const current = (scope) => {
    const profiles = scope.props.profiles
    return (profiles ? profiles.filter( (ele) => ele._id == scope.props.routeParams["id"])[0] : null)
}

class InfoElement extends React.Component {
    render(){
        if(this.props.info){
            return (
                <div>
                    <h4><strong>{this.props.type}</strong>:</h4>
                    <span>{this.props.info}</span>
                </div>)
        } else {
            return <span/>
        }
    }
}

class ProfileMap extends React.Component{
    render(){
        let style = {marginBottom: 10}
        if (this.props.address){
            let baseUrl = "https://www.google.com/maps/embed/v1/place?key=AIzaSyCit5vlrsc2naYoM4-HqKM1TNevMRAlFBM&q="
            let newaddress = baseUrl + this.props.address.split(" ").join("+")
            return(
                <div style = {style}>
                    <Iframe
                      width="100%"
                      height = "100%"
                      position = 'relative'
                      frameborder="0" style="border:0"
                      url={newaddress} allowfullscreen/>
                </div>
            )
        } else {
            return( <div/> )
        }
    }

}

function ProfilePaneView  (profile, onCLick) {
    if(!profile) {return <div/>}
    return (
            <div>
                <ProfileTab name={profile.name}/>
                <Grid>
                    <Row>
                        <Col xs={6} md={6}>
                            <Picture src={profile.image}></Picture>
                            <ProfileMap address = {profile.address}/>
                            <Button className="btn-fullWidth" bsStyle="primary" onClick={onCLick.edit} >Edit</Button>
                            <Button className="btn-fullWidth" bsStyle="default" onClick={onCLick.delete} >Delete</Button>
                        </Col>
                        <Col xs={6} md={6}>
                            <InfoElement info = {profile.name}        type = "Name"/>
                            <InfoElement info = {profile.email}       type = "Email"/>
                            <InfoElement info = {profile.address}     type = "Address"/>
                            <InfoElement info = {profile.description} type = "Description"/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
}

class ProfilePane extends React.Component{
    constructor(){
        super();
        this.edit = this.edit.bind(this)
        this.delete = this.delete.bind(this)
    }
    delete() {
        this.props.ProfileDeleteAsync(current(this), () => {
             browserHistory.push("/")
        })
    }
    componentDidMount() {
        if(!current(this)){ browserHistory.push(`/`)}
    }
    edit(){
        browserHistory.push(`/profiles/${this.props.routeParams["id"]}/edit`)
    }
    shouldComponentUpdate(nextProps, nextState){
        const profile = current({props: nextProps})
        if(!profile){browserHistory.push("/")}
        return false
    }
    render(){
        const profile = current(this)
        const iframeHeight = {height: 200}
        const iframeStyle  = {position: 'relative'} 
        return ProfilePaneView(profile, {edit: this.edit, delete: this.delete})
    }
}



const mapStateToProps = (state) => ({ profiles: state.profiles })

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

ProfilePane = connect(mapStateToProps, mapDispatchToProps)(ProfilePane);


export default ProfilePane