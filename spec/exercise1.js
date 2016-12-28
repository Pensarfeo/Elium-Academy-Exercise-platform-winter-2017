import {Hello}      from '../exercises/1.js'
import React      from 'react';
import { render } from 'react-dom'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe( 'Exericise 1',  ()=>{
    let component;
    //init jasmine-enzyme matchers
    beforeAll(()=>{
        jasmineEnzyme();
    })

    beforeEach(()=>{
        component = mount(<Hello/>)
    })

    it('should display hello', () => {
        expect(component.text()).toBe("Hello World")

    })
})

render(
    <Hello/>,
    document.getElementById('app')
)

