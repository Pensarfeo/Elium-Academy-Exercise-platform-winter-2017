import React from 'react'
import {Nav, NavItem} from 'react-bootstrap'
import {LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'



class Navbar extends React.Component{
    render() {
        return (
            <Nav bsStyle="tabs" >
                <IndexLinkContainer to={"/"} >
                    <NavItem>All</NavItem>
                </IndexLinkContainer>

                <LinkContainer to={"/profiles/new"}>
                    <NavItem>New Profile</NavItem>
                </LinkContainer>
            </Nav>
        );
    }
};

export default Navbar

