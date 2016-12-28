import {Profile, Detail} from '../exercises/3.js'
import React             from 'react';
import { render }        from 'react-dom'
import { mount }         from 'enzyme';
import jasmineEnzyme     from 'jasmine-enzyme';

render(
    <Profile>
        <Detail detail={{Name: "Pedro"}} />
        <Detail detail={{Email: "pedro@pedro.pedro"}} />
        <Detail detail={{Address: "PedroStraat 21, 3000 Pedroland"}}/>
    </Profile>,
    document.getElementById('app')
)

describe( 'Exericise 3',  ()=>{
    let component;
    //init jasmine-enzyme matchers
    beforeAll(()=>{
        jasmineEnzyme();
    })

    it('Profile should take children', () => {
        const component = mount(<Profile><h1>HELLO</h1></Profile>)
        expect(component.text()).toBe("HELLO")
    })

    it('the detail should display detail type and value', () => {
        const component = mount(<Detail detail={{banana: "split"}} />)
        expect(component.text()).toContain("banana")
        expect(component.text()).toContain("split")
    })

})