const runTest = function(beforeTest){
    readMessage.runEval = eval
    beforeTest()
    reactRender = ReactDOM.render(
        <Profile>
            <Detail detail={{Name: "Pedro"}} />
            <Detail detail={{Email: "pedro@pedro.pedro"}} />
            <Detail detail={{Address: "PedroStraat 21, 3000 Pedroland"}}/>
        </Profile>
        ,document.getElementById("yourSolution")
    )

    describe( 'Submit Detail should:',  ()=>{
        const mount = Enzyme.mount
        let component

        it('for the component Profile; make sure it can display its children', () => {
            var hello = "HELLO"
            const component = mount(<Profile><h1>{hello}</h1></Profile>)
            expect(component.text().trim()).toEqual("HELLO")
        })

        it('display detail type and value with the detail component', () => {
            const component = mount(<Detail detail={{sleep: "well"}} />)
            expect(component.text().trim()).toContain("sleep")
            expect(component.text().trim()).toContain("well")
        })

        it('have an input field', () => {
            const component = mount(<Detail detail={{sleep: "well"}} />)
            expect(component.find("input").length).toBe(1)
        })

        it('update the detail when button is clicked', () => {
            const component = mount(<Detail detail={{banana: "split"}} />)
            component.find("input").node.value="hotpotato"
            component.find("button").simulate("click")
            expect(component.text().trim()).toContain("hotpotato")
        })

        it('should not update the detail on input change', () => {
            const component = mount(<Detail detail={{banana: "split"}} />)
            component.find("input").node.value="hotpotato"
            component.find("input").simulate("change")
            expect(component.text().trim()).not.toContain("hotpotato")
        })

    })
}

var asyncTest = function(response) {
    JasmineBoot();
    response.data = "JS\n" + response.data;
    runTest(() => readMessage(response))
    exercuteTest()
}

window.runTheTest = function() {
    axios.get("<%= view.solution %>.js")
        .then(asyncTest)
}

runTheTest()