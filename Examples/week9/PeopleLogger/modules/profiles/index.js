//Store
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from "../../actions/profiles"

//Fetch Todo Data
import fetchProfiles from '../../storage/delayed'

// Presentation
import React from 'react'
import {Grid, Row, Button, Col} from 'react-bootstrap'
import { browserHistory, withRouter } from 'react-router'


// App Components
import Picture from "./_picture"

class ProfileBox extends React.Component{
    constructor(){
        super();
        this.show = this.show.bind(this)
    }

    show(){
        browserHistory.push("/profiles/" + this.props.profile._id + "/show")

    }

    render(){
        let profile = this.props.profile
        return(
            <Picture src={profile.image} alt="242x200" style = {{float: "right"}}>
                <h3>{profile.name}</h3>
                <Button  bsStyle="primary" onClick={this.show} > Details </Button>
            </Picture>
        )
    }
}
// need to figure out who to user react-router-redux to dispatch a page change
//import { push } from "react-router-redux"
//ProfileBox =   connect("", (dispatch)=>({push}, dispatch) )(ProfileBox);


const ProfileBoxes = ({profiles, handleClick}) => {
    return <div>
        {profiles.map(function (profile) {
            return (
                <Col xs={12} sm={6} md={4} key={profile.name}>
                    <ProfileBox  profile = {profile}/>
                </Col>
            )}
        )}
    </div>
}



class Index extends React.Component{
    componentDidMount(){
        
    }
    render() {
        return (
            <Grid>
                <Row>
                    <ProfileBoxes profiles = {this.props.profiles} />
                </Row>
            </Grid>
        )
    }
}

//
const mapStateToProps = (state) => ({profiles: state.profiles})
const mapDispatchToProps = (dispatch) =>  (bindActionCreators(actionCreators, dispatch));

Index = connect(mapStateToProps, mapDispatchToProps)(Index);


export default Index