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

        // ------------------------- TOOLS TEST
        it('have a tools sub state', () => {
            expect(Object.keys(store.getState())[1]).toEqual("tools")
        })

        it('start with an empty tools sub state', () => {
            expect(store.getState().tools[1]).toBeUndefined()
        })


        it('add a tool to the store when using the addTool action creator', () => {
            store.dispatch(addTool(1, "tool 0"))
            expect(store.getState().tools[0].id).toEqual(0)
            expect(store.getState().tools[0].todoId).toEqual(1)
            expect(store.getState().tools[0].tool).toEqual("tool 0")

            store.dispatch(addTool(1, "tool 1"))
            expect(store.getState().tools[1].id).toEqual(1)
            expect(store.getState().tools[1].todoId).toEqual(1)
            expect(store.getState().tools[1].tool).toEqual("tool 1")

            store.dispatch(addTool(2, "tool 2"))
            expect(store.getState().tools[2].id).toEqual(2)
            expect(store.getState().tools[2].todoId).toEqual(2)
            expect(store.getState().tools[2].tool).toEqual("tool 2")
        })

        it('add a multiple tools at once into the store when using the addTool action creator', () => {
            store.dispatch(addTool(3, "tool a", "tool b"))
            expect(store.getState().tools[3].id).toEqual(3)
            expect(store.getState().tools[3].todoId).toEqual(3)
            expect(store.getState().tools[3].tool).toEqual("tool a")

            expect(store.getState().tools[4].id).toEqual(4)
            expect(store.getState().tools[4].todoId).toEqual(3)
            expect(store.getState().tools[4].tool).toEqual("tool b")

        })



        it('delete a tool when using the removeTool action creator', () => {
            store.dispatch(removeTool(1))
            expect(store.getState().tools[1]).toBeUndefined()

            store.dispatch(removeTool(0))
            expect(store.getState().tools[0]).toBeUndefined()

        })

        it('update a tool when using the updateTool action creator', () => {
            store.dispatch(addTool("tool 3"))
            store.dispatch(updateTool(2, "redo tool 2"))

            expect(store.getState().tools[2].id).toEqual(2)
            expect(store.getState().tools[2].tool).toEqual("redo tool 2")

            expect(store.getState().tools[3].id).toEqual(3)
            expect(store.getState().tools[3].tool).toEqual("tool a")

        })

        it('return a new sub state object after dispatching addTool', () => {
            const state = store.getState().tools
            store.dispatch(addTool(1, "todo 4"))
            expect(store.getState().tools !== state).toEqual(true)
        })

        it('return a new sub state object after dispatching removeTool', () => {
            const state = store.getState().tools
            store.dispatch(removeTool(0))
            expect(store.getState().tools !== state).toEqual(true)
        })

        it('return a new sub state object after dispatching updateTool', () => {
            const state = store.getState().tools
            store.dispatch(updateTool(4, "asdf"))
            expect(store.getState().tools !== state).toEqual(true)
        })

        it('return a new sub state with a new todo object after dispatching updateTool', () => {
            const state = store.getState()
            store.dispatch(updateTool(4, "asdf"))
            expect(store.getState().tools[4] !== state.tools[4]).toEqual(true)
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

