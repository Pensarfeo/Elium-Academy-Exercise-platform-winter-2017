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
            component.find("button").simulate("click")
            expect(component.text()).toContain("1")
            component.find("button").simulate("click")
            expect(component.text()).toContain("1")
            component.find("button").simulate("click")
            expect(component.text()).toContain("3")
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