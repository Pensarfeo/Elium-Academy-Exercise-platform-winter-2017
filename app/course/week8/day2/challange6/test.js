const runTest = function(beforeTest){

    readMessage.runEval = eval
    beforeTest()
    describe( 'Elium App should:',  ()=>{
        var main = $(".jasmine-testground")
        var submitButton = main.find("input[type='submit']")
        var input = main.find("input[type='text']")
        var select = main.find("select")
        var tableJava = main.find('table#Java')
        var tableNode = main.find('table#Node')
        var tablePHP = main.find('table#PHP')
        var tablecpp = main.find('table#cpp')
        var shoAllButton = main.find('button#showAll')

        it('have a sumit button', () => {
            expect(submitButton.get(0)).toBeDefined()
        })

        it('have an input field', () => {
            expect(input.get(0)).toBeDefined()
        })

        it('have a table for each course', () => {
            expect(tableJava.get(0)).toBeDefined()
            expect(tableNode.get(0)).toBeDefined()
            expect(tablePHP.get(0)).toBeDefined()
            expect(tablecpp.get(0)).toBeDefined()
        })

        it('have an select input field', () => {
            expect(select.get(0)).toBeDefined()
        })

        it('have 5 options for the select field: "default", "Java", "Node", "PHP" & "c++"', () => {
            var selectOptionalValues = []
            $("select").children().each((i, ele) => {
                console.log(ele)
                selectOptionalValues.push( ele.value)
            })

            expect(selectOptionalValues.includes("default")).toEqual(true)
            expect(selectOptionalValues.includes("Java")).toEqual(true)
            expect(selectOptionalValues.includes("Node")).toEqual(true)
            expect(selectOptionalValues.includes("PHP")).toEqual(true)
            expect(selectOptionalValues.includes("c++")).toEqual(true)

        })

        it('add new names and surnames to the table', () => {
            // -----------------
            input.val("pedro favuzzi")
            var event = new Event('input', { bubbles: true });
            input[0].dispatchEvent(event);
            select.val("Java")
            submitButton.click()

            select.val("Node")
            submitButton.click()

            // -----------------
            input.val("banana split")
            select.val("Java")
            submitButton.click()

            select.val("c++")
            submitButton.click()

            // -----------------
            input.val("super man")
            select.val("Node")
            submitButton.click()

            select.val("PHP")
            submitButton.click()

            var expected = 0




            tableJava.find("tr").each((i, ele) => {
                const children = $(ele).children()
                if (["Pedro", "Banana" ].includes($(children[0]).text()) ) expected +=1
                if (["F.", "S." ].includes($(children[1]).text()) ) expected +=1
                    $(children[1]).mouseenter()
            })

            tableNode.find("tr").each((i, ele) => {
                const children = $(ele).children()
                if (["Pedro", "Super" ].includes($(children[0]).text()) ) expected +=1
                if (["F.", "M." ].includes($(children[1]).text()) ) expected +=1
                    $(children[1]).mouseenter()
            })

            tablePHP.find("tr").each((i, ele) => {
                const children = $(ele).children()
                if (["Super"].includes($(children[0]).text()) ) expected +=1
                if (["M."].includes($(children[1]).text()) ) expected +=1
                    $(children[1]).mouseenter()
            })

            tablecpp.find("tr").each((i, ele) => {
                const children = $(ele).children()
                if (["Banana"].includes($(children[0]).text()) ) expected +=1
                if (["S."].includes($(children[1]).text()) ) expected +=1
                    $(children[1]).mouseenter()
            })
            expect(expected).toEqual(12)
        })

        it('have a button with id = \"showAll\" to show all the students enrolled', () => {
            expect(shoAllButton.get(0)).toBeDefined()
        })

        it('show all the students enrolled when the showAll button is clicked', () => {
            shoAllButton.click()
            var tableAll = main.find('table#all')
            var expected = 0
            tableAll.find("tr").each((i, ele) => {
                const children = $(ele).children()
                if (["Pedro", "Super" , "Banana"].includes($(children[0]).text()) ) expected +=1
                if (["F.", "M.", "S."].includes($(children[1]).text()) ) expected +=1
            })
            expect(expected).toEqual(6)
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