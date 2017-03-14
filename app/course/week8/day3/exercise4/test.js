const runTest = function(beforeTest){
    readMessage.runEval = eval
    beforeTest()
    describe( 'Elium App should:',  ()=>{
        var main = $(".jasmine-testground")
        var submitButton = main.find("input[type='submit']#student")
        var inputName = main.find("input[name ='fullname']")
        var inputAge  = main.find("input[name ='age']"  )

        var setRange = main.find("input[type='submit']#filter")
        var inputMin = main.find("input[name ='min']")
        var inputMax  = main.find("input[name ='max']"  )

        var tableBody = main.find('tbody')

        it('have a sumit button for add a student', () => {
            expect(submitButton.get(0)).toBeDefined()
        })

        it('have an input for the full name', () => {
            expect(inputName.get(0)).toBeDefined()
        })

        it('have an input for the age', () => {
            expect(inputAge.get(0)).toBeDefined()
        })

        it('have a sumit button for setting the range', () => {
            expect(setRange.get(0)).toBeDefined()
        })

        it('have an input for the min value', () => {
            expect(inputMin.get(0)).toBeDefined()
        })

        it('have an input for the max value', () => {
            expect(inputMax.get(0)).toBeDefined()
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
            inputAge.val(100)
            submitButton.click()

            inputName.val("Evan")
            inputAge.val(25)
            submitButton.click()

            inputName.val("Nocola")
            inputAge.val(10)
            submitButton.click()


            var nameList
            var min
            var max
            var number

            tableBody.find("tr").each((i, ele) => {
                const children = $(ele).children()
                nameList = $(children[0]).text()
                min  = $(children[1]).text()
                max  = $(children[2]).text()
                number  = $(children[3]).text()
            })

            expect(nameList).toEqual('Nocola,Evan,patrick,super man,Very old man')
            expect(min).toEqual('0')
            expect(max).toEqual('100')
            expect(number).toEqual('5')

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

