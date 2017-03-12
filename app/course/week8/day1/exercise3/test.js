const runTest = function(beforeTest){
    readMessage.runEval = eval
    beforeTest()
    const oldConsoleLog = console.log
    let lastConsolelog
    console.log = (...args) => {
        lastConsolelog = args[0]
    }
    describe( 'Todo Store should:',  ()=>{

        beforeEach(() => lastConsolelog = undefined)

        it('console.log "state has changes" after dispatching addTodo ', () => {
            const state = store.getState().todos
            store.dispatch(addTodo("todo 4"))
            expect(lastConsolelog).toEqual("state has changed")
            store.dispatch(addTodo("todo 5"))
            expect(lastConsolelog).toEqual("state has changed")
        })

        it('console.log "state has changes" after dispatching removeTodo if record existed in the state', () => {
            const state = store.getState().todos
            store.dispatch(removeTodo(0))
            expect(lastConsolelog).toEqual("state has changed")
        })

        it('console.log "state has changes" after dispatching updateTodo if record existed in the state', () => {
            const state = store.getState().todos
            store.dispatch(updateTodo(1, "asdf"))
            expect(lastConsolelog).toEqual("state has changed")
        })

        it('do not console.log anything after dispatching removeTodo if the record does not exists', () => {
            const state = store.getState().todos
            store.dispatch(removeTodo(100))
            expect(lastConsolelog).toBeUndefined()
        })

        it('do not console.log anything after dispatching updateTodo  if the record does not exists', () => {
            const state = store.getState().todos
            store.dispatch(updateTodo(100, "asdf"))
            expect(lastConsolelog).toBeUndefined()
        })

        afterAll(() => console.log = oldConsoleLog)

    })
}

var asyncTest = function(response) {
    JasmineBoot();
    response.data = "JS\n" + response.data;
    runTest(() => {
        try {
            readMessage(response)
        } catch (error) {
            console.log(error)
        }
    })
    exercuteTest()
}

window.runTheTest = function() {
    axios.get("<%= view.solution %>.js")
        .then(asyncTest)
}

runTheTest()

