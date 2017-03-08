const runTest = function(beforeTest){
    readMessage.runEval = eval
    beforeTest()
    reactRender = ReactDOM.render(
        <Profile>
            <Name/>
            <Email/>
            <Address/>
        </Profile>
        , document.getElementById("yourSolution"))

    describe( 'Statefull Profiles should:',  ()=>{
        let component;

        it('for the component Profile; make sure it can display its children', () => {
            var hello = "HELLO"
            const component = Enzyme.mount(<Profile><h1>{hello}</h1></Profile>)
            expect(component.text()).toEqual("HELLO")
        })

        it('display "Name: Pedro" though the Name component ', () => {
            const component = Enzyme.mount(<Name/>)
            expect(component.text().generalize()).toBe("Name: Pedro".generalize())
        })

        it('display "Email: pedro@pedro.pedro" through the Email component', () => {
            const component = Enzyme.mount(<Email/>)
            expect(component.text().generalize()).toBe("Email: Pedro@pedro.pedro".generalize())
        })

        it('display "Address: PedroStraat 21, 3000 Pedroland" though the Address component', () => {
            const component = Enzyme.mount(<Address/>)
            expect(component.text().generalize()).toBe("Address: PedroStraat 21, 3000 Pedroland".generalize())
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