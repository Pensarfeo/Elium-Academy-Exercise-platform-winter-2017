const runTest = function(beforeTest){
    const RegisterAlert = []
    const OldAllter = window.alert
    window.alert = function(message){
        RegisterAlert.push(message)
    }
    readMessage.runEval = eval
    beforeTest()
    reactRender = ReactDOM.render( <EliumApp/>, document.getElementById("yourSolution"))
    reactRender = ReactDOM.render( <EliumApp/>, document.getElementsByClassName("jasmine-testground")[0])
    describe( 'Elium App should:',  ()=>{
        var main = $(".jasmine-testground")
        var submitButton = main.find("input[type='submit']")
        var input = main.find("input[type='text']")
        var tableBody = main.find('tbody')

        it('have a sumit button', () => {
            expect(submitButton.get(0)).toBeDefined()
        })

        it('have an input field', () => {
            expect(input.get(0)).toBeDefined()
        })

        it('have an table body', () => {
            expect(tableBody.get(0)).toBeDefined()
        })

        it('add new names and surnames to the table', () => {
            input.val("pedro favuzzi")
            submitButton.click()

            input.val("banana split")
            submitButton.click()

            input.val("super man")
            submitButton.click()
            var expected = 0
            tableBody.find("tr").each((i, ele) => {
                const children = $(ele).children()
                if (["Pedro", "Banana", "Super" ].includes($(children[0]).text()) ) expected +=1
                if (["F.", "S.", "M." ].includes($(children[1]).text()) ) expected +=1
                    $(children[1]).mouseenter()
            })
            expect(expected).toEqual(6)
        })

        it('alert when format its not right', () => {
            input.val("pedro antonio favuzzi")
            submitButton.click()

            input.val("bananaSplit")
            submitButton.click()

            input.val("super_man")
            submitButton.click()
            expect(RegisterAlert.length).toEqual(3)
        })

        afterAll(() =>{
             window.alert = OldAllter
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