#### dependent states

Estend the previous exercise by adding the action creators and dispatch methods necessary to remove the tools the belong to a specific todo.
Also add the action creators and dipatch methods necessary to modify the list of todos and tools with only one dispatch call.


```jsx


todoId = 3

store.dipatch(removeTodo(todoId))
store.getState()
//{
//  todos: [{id: 0, title: "Sleep"}, {id: 1, title: "Walk"}, {id: 2, title: "Study"}, {id: 3, title: "Eat"}],
//  todoTools: [{id:0, todoId: 1, title: "Shoes"}, undefined, undefined]
//}


todoId = 3

store.dipatch(addTodo("wash the dishes", ["sponge", "soap"]))
store.getState()
//{
//  todos: [{id: 0, title: "Sleep"}, {id: 1, title: "Walk"}, {id: 2, title: "Study"}, undefined, {id: 4, title: "wash the dishes"}],
//  todoTools: [{id:0, todoId: 1, title: "Shoes"}, undefined, undefined, {id: 3, todoId: 4, title: "sponge"}, {id: 3, todoId: 4, title: "soap"}  ]
//}


```
