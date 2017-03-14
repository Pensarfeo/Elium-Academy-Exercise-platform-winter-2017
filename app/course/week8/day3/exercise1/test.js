const runTest = function(beforeTest){
    const RegisterAlert = []
    const OldAllter = window.alert
    window.alert = function(message){
        RegisterAlert.push(message)
    }
    readMessage.runEval = eval
    beforeTest()
    describe( 'Elium App should:',  ()=>{
        var main = $(".jasmine-testground")
        var submitButton = main.find("input[type='submit']")
        var inputName = main.find("input[name ='fullname']")
        var inputCost = main.find("input[name ='cost']")
        var inputPaid = main.find("input[name ='paid']")
        var tableBody = main.find('tbody')

        beforeAll(() => {
        })

        it('have a sumit button', () => {
            expect(submitButton.get(0)).toBeDefined()
        })

        it('have an input for the full name', () => {
            expect(inputName.get(0)).toBeDefined()
        })

        it('have an input for the cost due', () => {
            expect(inputCost.get(0)).toBeDefined()
        })

        it('have an input for the cost paid', () => {
            expect(inputPaid.get(0)).toBeDefined()
        })


        it('have an table body', () => {
            expect(tableBody.get(0)).toBeDefined()
        })

        it('add new names and surnames to the table', () => {
            inputName.val("pedro favuzzi")
            inputCost.val(100)
            inputPaid.val(0)
            submitButton.click()

            inputName.val("banana split")
            inputCost.val(343)
            inputPaid.val(343)
            submitButton.click()

            inputName.val("super man")
            inputCost.val(1)
            inputPaid.val(2)
            submitButton.click()

            var expected = 0
            tableBody.find("tr").each((i, ele) => {
                const children = $(ele).children()
                if (["pedro favuzzi", "banana split", "super man"].includes($(children[0]).text()) ) expected +=1
                if (["100", "343", "1" ].includes($(children[1]).text()) ) expected +=1
                if (["0", "343", "2" ].includes($(children[2]).text()) ) expected +=1
            })
            expect(expected).toEqual(9)
        })

        it('the paid cell should be green if the student pay the right ammount', () =>{
            var expected = 0
            tableBody.find("tr").each((i, ele) => {
                const children = $(ele).children()
                if ($(children[1]).text() === $(children[2]).text()){
                    if( $(children[2]).css("backgroundColor") === "rgb(0, 128, 0)" ) expected +=1
                } 
            })
            expect(expected).toEqual(1)
        })
        it('the paid cell should be yellow if the student paid more', () =>{
            var expected = 0
            tableBody.find("tr").each((i, ele) => {
                const children = $(ele).children()
                if ($(children[1]).text() < $(children[2]).text()){
                     if( $(children[2]).css("backgroundColor") === "rgb(255, 255, 0)" ) expected +=1
                }
            })
            expect(expected).toEqual(1)
        })

        it('the paid cell should be red if the student paid less', () =>{
            var expected = 0
            tableBody.find("tr").each((i, ele) => {
                const children = $(ele).children()
                if ($(children[1]).text() > $(children[2]).text()){
                    if( $(children[2]).css("backgroundColor") === "rgb(255, 0, 0)" ) expected +=1
                }
            })
            expect(expected).toEqual(1)
        })

        it('the a student paid more there should have been an alert', () =>{
            expect(RegisterAlert.length).toEqual(1)
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

