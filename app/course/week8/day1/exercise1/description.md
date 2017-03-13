#### Todo Store

Make a react store to keep tracks of all your todos. You should be able to add, remove and update a todo.


```jsx
store.dipatch(addTodo("Eat"))
store.getState() // => {todos: [{id: 0, todo: "Sleep"}, {id: 1, todo: "Walk"}, {id: 2, todo: "Study"}, {id: 3, todo: "Eat"}]}

store.dipatch(removeTodo(2))
store.getState() // => {todos: [{id: 0, todo: "Sleep"}, {id: 1, todo: "Walk"}, undefined, {id: 3, todo: "Eat"}]}

store.dipatch(updateTodo(0, "Sleep tight"))
store.getState() // => {todos: [{id: 0, todo: "Sleep tight"}, {id: 1, todo: "Walk"}, undefined, {id: 3, todo: "Eat"}]}
```

**Notes:** to copy the array into a new one while maintaining the right array lents use:

```jsx
newArray = [...oldArray]
```