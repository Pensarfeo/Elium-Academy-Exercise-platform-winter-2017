const runTest = function(beforeTest){
    readMessage.runEval = eval
    beforeTest()
    console.log("-------------")
    describe( 'Todo Store should:',  ()=>{

        it('have a todos sub state', () => {
            expect(Object.keys(store.getState())[0]).toEqual("todos")
        })

        it('start with an empty todos sub state', () => {
            expect(store.getState().todos[0]).toBeUndefined()
        })


        it('add a todo to the store when using the addTodo action creator', () => {
            store.dispatch(addTodo("todo 0"))
            expect(store.getState().todos[0].id).toEqual(0)
            expect(store.getState().todos[0].todo).toEqual("todo 0")

            store.dispatch(addTodo("todo 1"))
            expect(store.getState().todos[1].id).toEqual(1)
            expect(store.getState().todos[1].todo).toEqual("todo 1")

            store.dispatch(addTodo("todo 2"))
            expect(store.getState().todos[2].id).toEqual(2)
            expect(store.getState().todos[2].todo).toEqual("todo 2")
        })




        it('delete a todo when using the removeTodo action creator', () => {
            store.dispatch(removeTodo(1))
            expect(store.getState().todos[1]).toBeUndefined()

            store.dispatch(removeTodo(0))
            expect(store.getState().todos[0]).toBeUndefined()

        })

        it('update a todo when using the updateTodo action creator', () => {
            store.dispatch(addTodo("todo 3"))
            store.dispatch(updateTodo(2, "redo todo 2"))

            expect(store.getState().todos[2].id).toEqual(2)
            expect(store.getState().todos[2].todo).toEqual("redo todo 2")

            expect(store.getState().todos[3].id).toEqual(3)
            expect(store.getState().todos[3].todo).toEqual("todo 3")

        })

        it('return a new sub state object after dispatching addTodo', () => {
            const state = store.getState().todos
            store.dispatch(addTodo("todo 4"))
            expect(store.getState().todos !== state).toEqual(true)
        })

        it('return a new sub state object after dispatching removeTodo', () => {
            const state = store.getState().todos
            store.dispatch(removeTodo(0))
            expect(store.getState().todos !== state).toEqual(true)
        })

        it('return a new sub state object after dispatching updateTodo', () => {
            const state = store.getState().todos
            store.dispatch(updateTodo(4, "asdf"))
            expect(store.getState().todos !== state).toEqual(true)
        })

        it('return a new sub state with a new todo object after dispatching updateTodo', () => {
            const state = store.getState()
            store.dispatch(updateTodo(4, "asdf"))
            expect(store.getState().todos[4] !== state.todos[4]).toEqual(true)
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

