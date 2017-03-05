const runTest = function(beforeTest){
    const mount = Enzyme.mount
    readMessage.runEval = eval
    beforeTest()
    reactRender = ReactDOM.render( <Counter/>, document.getElementById("yourSolution"))

    describe( 'Counter component should:',  ()=>{
        let component

        beforeEach(()=>{
            component = mount(<Counter/>)
        })

        it('should display a button', () => {
            expect(component.find("button").length).toEqual(1)
        })

        it('start from 0', () => {
            expect(component.text()).toContain("0")
        })

        it('only update when clicked an odd number of times', () => {
            const button = component.find("button")
            for(let i=0; i<10; i++){ button.simulate("click") }
                
            const numberText = component.text().replace(button.text(), "")
            expect(numberText).toEqual("0")
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