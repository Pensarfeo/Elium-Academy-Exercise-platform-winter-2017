#### Todo Store

Extend the previous exercise add an other property to the store containing a list of things/tools necessary  to accomplish the task.


```jsx
// Add one Tool
let todoId = 1
let tool = ["shoes"]

store.dipatch(addTool(todoId, tool))
store.getState()
//{
//  todos: [{id: 0, title: "Sleep"}, {id: 1, title: "Walk"}, {id: 2, title: "Study"}, {id: 3, title: "Eat"}],
//  todoTools: [{id:0, todoId: 1, title: "Shoes"}]
//}


todoId = 3
tool = ["fork", "food"]

store.dipatch(addTool(todoId, tool))
store.getState()
//{
//  todos: [{id: 0, title: "Sleep"}, {id: 1, title: "Walk"}, {id: 2, title: "Study"}, {id: 3, title: "Eat"}],
//  todoTools: [{id:0, todoId: 1, title: "Shoes"}, {id: 1, todoId: 3, "fork"}, {id: 2, todoId: 3, "food"}]
//}

toolId = 1
tool = "fork & knife"

store.dipatch(updateTool(toolId, tool))
store.getState()
//{
//  todos: [{id: 0, title: "Sleep"}, {id: 1, title: "Walk"}, {id: 2, title: "Study"}, {id: 3, title: "Eat"}],
//  todoTools: [{id:0, todoId: 1, title: "Shoes"}, {id: 1, todoId: 3, "fork & knife"}, {id: 2, todoId: 3, "food"}]
//}

toolId = 1

store.dipatch(removeTool(toolId))
store.getState()
//{
//  todos: [{id: 0, title: "Sleep"}, {id: 1, title: "Walk"}, {id: 2, title: "Study"}, {id: 3, title: "Eat"}],
//  todoTools: [{id:0, todoId: 1, title: "Shoes"}, undefined, {id: 2, todoId: 3, "food"}]
//}






```