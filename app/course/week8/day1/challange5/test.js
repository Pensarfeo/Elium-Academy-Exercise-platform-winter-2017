const runTest = function(beforeTest){
    readMessage.runEval = eval
    beforeTest()
    console.log("-------------")
    describe( 'Todo Store should:',  ()=>{
        // ------------------------- TODOS TEST
        it('have a todos sub state', () => {
            expect(Object.keys(store.getState())[0]).toEqual("todos")
        })

        it('start with an empty todos sub state', () => {
            expect(store.getState().todos[0]).toBeUndefined()
        })


        it('add a todo to the store when using the addTodo action creator', () => {
            store.dispatch(addTodo("todo 0", "tool 01", "tool 02"))
            expect(store.getState().todos[0].id).toEqual(0)
            expect(store.getState().todos[0].todo).toEqual("todo 0")

            store.dispatch(addTodo("todo 1", "tool 11", "tool 12"))
            expect(store.getState().todos[1].id).toEqual(1)
            expect(store.getState().todos[1].todo).toEqual("todo 1")

            store.dispatch(addTodo("todo 2", "tool 21", "tool 22"))
            expect(store.getState().todos[2].id).toEqual(2)
            expect(store.getState().todos[2].todo).toEqual("todo 2")
        })

        it('add the tools aswell when using addTodo action creator', () => {

            expect(store.getState().tools[0].id).toEqual(0)
            expect(store.getState().tools[0].todoId).toEqual(0)
            expect(store.getState().tools[0].tool).toEqual("tool 01")

            expect(store.getState().tools[1].id).toEqual(1)
            expect(store.getState().tools[1].todoId).toEqual(0)
            expect(store.getState().tools[1].tool).toEqual("tool 02")

            expect(store.getState().tools[2].id).toEqual(2)
            expect(store.getState().tools[2].todoId).toEqual(1)
            expect(store.getState().tools[2].tool).toEqual("tool 11")

            expect(store.getState().tools[3].id).toEqual(3)
            expect(store.getState().tools[3].todoId).toEqual(1)
            expect(store.getState().tools[3].tool).toEqual("tool 12")

            expect(store.getState().tools[4].id).toEqual(4)
            expect(store.getState().tools[4].todoId).toEqual(2)
            expect(store.getState().tools[4].tool).toEqual("tool 21")

            expect(store.getState().tools[5].id).toEqual(5)
            expect(store.getState().tools[5].todoId).toEqual(2)
            expect(store.getState().tools[5].tool).toEqual("tool 22")

        })

        it('delete a todo when using the removeTodo action creator', () => {
            store.dispatch(removeTodo(1))
            expect(store.getState().todos[1]).toBeUndefined()

            store.dispatch(removeTodo(0))
            expect(store.getState().todos[0]).toBeUndefined()
        })

        it('delete all associated tools when using the removeTodo action creator', () => {
            expect(store.getState().tools[0]).toBeUndefined()
            expect(store.getState().tools[1]).toBeUndefined()

            expect(store.getState().tools[2]).toBeUndefined()
            expect(store.getState().tools[3]).toBeUndefined()

            expect(store.getState().tools[4]).toBeDefined()
            expect(store.getState().tools[5]).toBeDefined()
        })

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

