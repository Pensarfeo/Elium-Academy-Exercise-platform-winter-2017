import {Profile, Name, Address, Email} from '../exercises/2.js'
import React      from 'react';
import { render } from 'react-dom'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

render(
    <Profile>
        <Name/>
        <Email/>
        <Address/>
    </Profile>,
    document.getElementById('app')
)

describe( 'Exericise 2',  ()=>{
    let component;
    //init jasmine-enzyme matchers
    beforeAll(()=>{
        jasmineEnzyme();
    })

    it('Profile should take children', () => {
        var hello = "HELLO"
        const component = mount(<Profile><h1>{hello}</h1></Profile>)
        expect(component.text()).toEqual("HELLO")
    })

    it('Compoenent Name Should display Name: Pedro', () => {
        const component = mount(<Name/>)
        expect(component.text()).toBe("Name: Pedro")
    })

    it('Compoenent Email Should display Email: pedro@pedro.pedro', () => {
        const component = mount(<Email/>)
        expect(component.text()).toBe("Email: Pedro@pedro.pedro")
    })

    it('Compoenent Address Should display Address: PedroStraat 21, 3000 Pedroland', () => {
        const component = mount(<Address/>)
        expect(component.text()).toBe("Address: PedroStraat 21, 3000 Pedroland")
    })

})
