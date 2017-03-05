const runTest = function(beforeTest){
    readMessage.runEval = eval
    beforeTest()
    reactRender = ReactDOM.render(<ShowList list ={[1,2,3,4]}/>, document.getElementById("yourSolution"))

    describe( 'Delete on Hover should:',  ()=>{
        const mount = Enzyme.mount
        let component

        it('prints a list of elements from a given arrays', () => {
            let array = "12345678" 
            const component = mount(<ShowList list={array.split("")} />)
            expect(component.text()).toBe(array)
        })

        it('when an element of the list is hovered upon, the element is removed', () => {
            let array = "12345678" 
            const component = mount(<ShowList list={array.split("")} />)
            component.find("[children='5']").simulate("mouseenter")
            expect(component.find("[children='5']").length).toBe(0)
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