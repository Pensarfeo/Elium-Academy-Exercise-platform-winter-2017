import {Profile, Detail} from '../exercises/5.js'
import React      from 'react';
import { render } from 'react-dom'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

render(
    <Profile>
        <Detail detail={{Name: "Pedro"}} />
        <Detail detail={{Email: "pedro@pedro.pedro"}} />
        <Detail detail={{Address: "PedroStraat 21, 3000 Pedroland"}}/>
    </Profile>,
    document.getElementById('app')
)

describe( 'Exericise 5',  ()=>{
    let component;
    //init jasmine-enzyme matchers
    beforeAll(()=>{
        jasmineEnzyme();
    })

    it('the detail should display detail type and value', () => {
        const component = mount(<Detail detail={{banana: "split"}} />)
        expect(component.text()).toContain("banana")
        expect(component.text()).toContain("split")
    })

    it('the detail should have an input field', () => {
        const component = mount(<Detail detail={{banana: "split"}} />)
        expect(component.find("input").length).toBe(1)
    })

    it('the detail should update on input change', () => {
        const component = mount(<Detail detail={{banana: "split"}} />)
        component.find("input").node.value="hotpotato"
        component.find("button").simulate("click")
        expect(component.text()).toContain("hotpotato")
    })
})