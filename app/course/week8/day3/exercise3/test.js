const runTest = function(beforeTest){
    readMessage.runEval = eval
    beforeTest()
    describe( 'Elium App should:',  ()=>{
        var main = $(".jasmine-testground")
        var submitButton = main.find("input[type='submit']")
        var inputName = main.find("input[name ='fullname']")
        var inputAge  = main.find("input[name ='age']"  )
        var tableBody = main.find('tbody')

        it('have a sumit button', () => {
            expect(submitButton.get(0)).toBeDefined()
        })

        it('have an input for the full name', () => {
            expect(inputName.get(0)).toBeDefined()
        })

        it('have an input for the age', () => {
            expect(inputAge.get(0)).toBeDefined()
        })

        it('have an table body', () => {
            expect(tableBody.get(0)).toBeDefined()
        })

        it('be able to add students and their age', () => {
            inputName.val("patrick")
            inputAge.val(35)
            submitButton.click()

            inputName.val("super man")
            inputAge.val(40)
            submitButton.click()

            inputName.val("Very old man")
            inputAge.val(1000)
            submitButton.click()

            inputName.val("new born")
            inputAge.val(0)
            submitButton.click()

            inputName.val("puppy")
            inputAge.val(0)
            submitButton.click()


            inputName.val("Evan")
            inputAge.val(25)
            submitButton.click()

            inputName.val("Nocola")
            inputAge.val(24)
            submitButton.click()


            var nameList = []
            var agelist = []
            tableBody.find("tr").each((i, ele) => {
                const children = $(ele).children()
                nameList.push($(children[0]).text())
                agelist.push($(children[1]).text())
            })
            expect(agelist).toEqual([ '0(2)', '24(1)', '25(1)', '35(1)', 'Youth is wasted on the Young(2)' ])
            expect(nameList).toEqual([ 'new born,puppy', 'Nocola', 'Evan', 'patrick', 'super man,Very old man' ])

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

