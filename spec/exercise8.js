import {Profile, Detail}    from '../exercises/8.js'
import React         from 'react';
import { render }    from 'react-dom'
import { mount }     from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

render(
    <Profile>
        <Detail detail={{Name: "Pedro"}} />
        <Detail detail={{Email: "pedro@pedro.pedro"}} />
        <Detail detail={{Address: "PedroStraat 21, 3000 Pedroland"}}/>
    </Profile>,
    document.getElementById('app')
)


describe( 'Exericise 8',  ()=>{
    let component;
    //init jasmine-enzyme matchers
    beforeAll(()=>{
        jasmineEnzyme();
    })

    beforeEach(()=>{
        component = mount(<Detail detail={{banana: "split"}} />)
    })

    it('the detail should display detail type and value', () => {
        expect(component.text()).toContain("banana")
        expect(component.text()).toContain("split")
    })

    it('the detail should have an button with text Edit', () => {
        const button = component.find("button")
        expect(button.length).toBe(1)
        expect(button.text()).toContain("Edit")
    })

    it('at first no input field should exists', () => {
        const button = component.find("input")
        expect(button.length).toBe(0)
    })


    it('if the edit button is clicked an edit field should appear and the previous view sholud dissappear', () => {
        const initialText = component.text()
        component.find("button").simulate("click")
        expect(component.find("input").length).toBe(1)
        expect(component.text()).not.toEqual(initialText)
    })

    it('if the edit button is clicked we should have an edit and cancel button', () => {
        component.find("button").simulate("click")
        const button   = component.find("button")
        expect(button.length).toBe(2)
    })

    it('if the cancel button is clicked we should go back to the previous view', () => {
        const initialText = component.text()
        component.find("button").simulate("click")
        component.find("button").forEach( function(node, index) {
            if(node.text().trim() === "Cancel"){ node.simulate("click")}
        });
        expect(component.text()).toEqual(initialText)
    })

    it('if the save button is clicked with a new input value the detail should be updated', () => {
        const initialText = component.text()
        const newValue = "bananas"

        component.find("button").simulate("click")
        const oldValue = component.find("input").node.value

        component.find("input").node.value = newValue
        component.find("button").forEach( function(node, index) {
            if(node.text().trim() === "Save"){ node.simulate("click")}
        });
        expect(component.text()).toEqual(initialText.replace(oldValue, newValue))
    })

    it('if the save button is clicked the edit view should be removed', () => {
        const initialText = component.text()
        component.find("button").simulate("click")
        component.find("button").forEach( function(node, index) {
            if(node.text().trim() === "Save"){ node.simulate("click")}
        });
        expect(component.find("input").length).toBe(0)
        expect(component.text()).toEqual(initialText)
        //.simulate("click")
    })

})