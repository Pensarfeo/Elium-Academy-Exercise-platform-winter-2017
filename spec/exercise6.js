import {ShowList} from '../exercises/6.js'
import React      from 'react';
import { render } from 'react-dom'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

render(
    <ShowList list ={[1,2,3,4]}/>,
    document.getElementById('app')
)


describe( 'Exericise 6',  ()=>{
    let component;
    //init jasmine-enzyme matchers
    beforeAll(()=>{
        jasmineEnzyme();
    })

    it('prints a list of elements from a given arrays', () => {
        let array = "12345678" 
        const component = mount(<ShowList list={array.split("")} />)
        expect(component.text()).toBe(array)
    })

})