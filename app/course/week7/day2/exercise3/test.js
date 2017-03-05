const runTest = function(beforeTest){
    readMessage.runEval = eval
    beforeTest()
    reactRender = ReactDOM.render(
        <Profile>
            <Detail detail={{Name: "Pedro"}} />
            <Detail detail={{Email: "pedro@pedro.pedro"}} />
            <Detail detail={{Address: "PedroStraat 21, 3000 Pedroland"}}/>
        </Profile>
        , document.getElementById("yourSolution"))

    describe( 'Display should:',  ()=>{
        const mount = Enzyme.mount
        let component

        it('for the component Profile; make sure it can display its children', () => {
            var hello = "HELLO"
            const component = mount(<Profile><h1>{hello}</h1></Profile>)
            expect(component.text()).toEqual("HELLO")
        })

        it('display the detail type and value', () => {
            let component = mount(<Detail detail={{banana: "split"}} />)
            expect(component.text().trim()).toContain("banana")
            expect(component.text().trim()).toContain("split")

            component = mount(<Detail detail={{soup: "hot"}} />)
            expect(component.text().trim()).toContain("soup")
            expect(component.text().trim()).toContain("hot")
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