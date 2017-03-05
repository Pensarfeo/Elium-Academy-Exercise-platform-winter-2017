const runTest = function(beforeTest){
    readMessage.runEval = eval
    beforeTest()
    reactRender = ReactDOM.render( <HelloWorld/>, document.getElementById("yourSolution"))

    describe( 'HelloWorld component should:',  ()=>{
        let component
        beforeEach(()=>{
            component = Enzyme.mount(<HelloWorld/>)
        })

        it('should display hello', () => {
            expect(component.text().trim().toLowerCase()).toBe("hello world")

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