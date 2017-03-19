import React from 'react'
import {Grid, Row, Col, form, FormGroup, ControlLabel, FormControl, HelpBlock, Button}from 'react-bootstrap'


function FieldGroup(attr) {
  return (
    <FormGroup controlId={attr.id}>
      <ControlLabel>{attr.label}</ControlLabel>
      <FormControl {...attr} />
    </FormGroup>
  )
}

var FormProfile = React.createClass({
    gatherAllData (event) {
        event.preventDefault()
        const inputs = [].slice.call(event.target.getElementsByTagName("input"))
        const description = event.target.getElementsByTagName("textarea")[0]
        let newProfile = {}

        inputs.map( (ele) => {
            if (ele.value) {newProfile[ele.getAttribute("data-purpose")] = ele.value}
        })
        newProfile.description = description.value
        this.props.handleData(newProfile)
    },
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <form action="" onSubmit={this.gatherAllData}>
                            <FieldGroup
                                id="formControlsText"
                                data-purpose = "name"
                                type="text"
                                label="Name"
                                placeholder="Your Name"
                                defaultValue = {this.props.name}

                            />
                            <FieldGroup
                                id="formControlsEmail"
                                type="email"
                                label="Email address"
                                data-purpose = "email"
                                placeholder="Your email"
                                defaultValue = {this.props.email}
                            />
                            <FieldGroup
                              id="formControlsAddress"
                              type="text"
                              label="Address"
                              placeholder="Your Address"
                              data-purpose = "address"
                              defaultValue = {this.props.address}
                            />
                            <FieldGroup
                              id="formControlsImage"
                              type="text"
                              label="Image"
                              placeholder="Your Image link"
                              data-purpose = "image"
                              defaultValue = {this.props.image}
                            />
                            <FormGroup
                                controlId="formControlsTextarea"
                                value = {this.props.description}
                            >
                              <ControlLabel>Personal Description</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="textarea" data-purpose = "description" />
                            </FormGroup>

                            <Button type="submit">
                              Submit
                            </Button>
                        </form>
                    </Col>
                </Row>
            </Grid>
        )
    }
})

export default FormProfile




