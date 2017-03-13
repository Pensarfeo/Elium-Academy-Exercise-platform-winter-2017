#### Preparation
Today we will start working on Redux. Redux a state store; that is a kind of database for the front end that keeps all the information necessary for rendering the page.

Most exercises of today will run without changing the DOM, so keep your dev tools open to see eventual errors!

##### Setting Up Redux.
To set up redux we need to download the (Redux code)[https://cdnjs.cloudflare.com/ajax/libs/redux/3.6.0/redux.min.js] and add it to our setup. At this point we need to know a little bit more about how to structure the Redux Store.
Infact Redux is a very simple piece of code, but it needs to be used precicely.

To initialize the redux store we Redux needs to know 3 things:
1. The shape of the store (simmilar to the collections of mongoDB).
2. The initial values of the store.
3. The list of reducers for each sub state of the store.

Once the store has been create it allowes 3 basi actions
1. To access to state via getState();
2. To updated the state via dispatch(action);
3. Registers listeners via subscribe(listener);

##### Reducers

Redux reducers are the functions that will handle changes on the sub states of the store. In redux we must write one and one only dispatch for each for each sub state.

Commonly a Redux reducer will take the its own substate and the dispatch object as argument. A typical Reducer looks like this.

```jsx
const todos = function (state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([ action.text ])
        default:
            return state
    }
}
```

To make Redux work properly we must remember few rules:
1. A Reducer must allways return a new object if the sub-state was changed.
2. A Reducer must return the same state if the state was not changed.
3. **A Reducer must also be able to handle the condition in which the state is undefined and initialize the state.**

It is common practice to write the Reducer as a function containing a (switch)[https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/switch]; a variation on ```else if``` statement.


##### Our first Store

To create a reducer we need to combine all the reducers we might have created.

```jsx
// Reducer
const todos = function (state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([ action.text ])
        default:
            return state
    }
}

// Create Store
const storeReducer = Redux.combineReducers({todos}) // this creates a single reducer for the whole store
const store = Redux.createStore(storeReducer)
```

If we where to have multiple reducers we still follow the same structure

```jsx
// Reducer
const todos = function (state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([ action.text ])
        default:
            return state
    }
}

const names = function (state = [], action) {
    switch (action.type) {
        case 'ADD_NAME':
            return state.concat([ action.text ])
        default:
            return state
    }
}

// Create Store
const storeReducer = Redux.combineReducers({todos, names})
const store = Redux.createStore(storeReducer)
```

###### Fix Me

Fix the following examples

```jsx
// Reducer
const todos = function (state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([ action.text ])
        default:
            return state
    }
}

// Create Store
const storeReducer = Redux.combineReducers({todos})
const store = Redux.createStore(storeReducer)
```

```jsx
// Reducer
const todos = function (state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([ action.text ])
        default:
            return state
    }
}

// Create Store
const storeReducer = todos
const store = Redux.createStore(storeReducer)
```

##### Default State.

We can also set a default state for the store in which case we simply pass it as the second argument.
**Remember that the keys of the reducers must match the keys of each sub-state**.

```jsx
const names = function (state = [], action) {
    // we skip the code for brevity...
}

const todos = function (state = [], action) {
    // we skip the code for brevity...
}


// Create Store
const storeDefault = {names: ["Pedro", "Juan"], todos: ["Study", "Read", "Cook"]}
const storeReducer = Redux.combineReducers({todos, names})
const store = Redux.createStore(storeReducer, storeDefault)
```

###### Fix Me

In this case we are having trouble initializing the store. 

```jsx
const todos = function (state = [], action) {
    // we skip the code for brevity...
}

const names = function (state, action) {
    // we skip the code for brevity...
}


// Create Store
const storeDefault = {theNames: [], todos: ["Study", "Read", "Cook"]}
const storeReducer = Redux.combineReducers({todos, names})
const store = Redux.createStore(storeReducer, storeDefault)
```

##### Changing the State

To change our store we need to "**dispatch**" an "**action**". In plain redux all actions are supposed to be objects wich should contain the information necessary to change our state.

In Redux it is common practice to create functions, called **Action Creators** that will return the action object to be dispatched to the store. To change the store we will call the dispatch mmethod over our created store as ```store.dispatch```.

```jsx
// Action Creators
addTodo = (data) => return {type: "ADD_TODO", data }

// Dispatchers
const todos = function (state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([ action.data ])
        default:
            return state
    }
}


// Default State
const storeDefault = {todos: ["Study", "Read", "Cook"]}


// Build Store
const storeReducer = Redux.combineReducers({todos})
const store = Redux.createStore(storeReducer, storeDefault)


// Dispatch Action
store.dispatch(addTodo("Understand Redux"))


// Get New state
store.getState() // => {todos: ["Study", "Read", "Cook", "Understand Redux"]]}
```

###### Fix Me

The state is not being changed. Make sure you fix the following code!

```jsx
// Action Creators
addTodo = (data) => return {bananas: "ADD_TODO", data }


// Dispatchers
const todos = function (state = [], action) {
    switch (action.bananas) {
        case 'ADD_TODO':
            return state.concat([ action.pineapple ])
        default:
            return state
    }
}

// Default State
const storeDefault = {todos: ["Study", "Read", "Cook"]}


// Build Store
const storeReducer = Redux.combineReducers({todos})
const store = Redux.createStore(storeReducer, storeDefault)


// Dispatch Action
store.dispatch(addTodo("Understand Redux"))


// Get New state
store.getState() // => {todos: ["Study", "Read", "Cook"]]}
```

##### Multiple reducers

In redux there is only one dipatcher. So when you call the store the dispatch methods will pass the action to each single reducers that you declared when you created the store. Moreover the reducer is only going to recieve the specific sub state its associated to and not the whole store. If you need to connect multiple state you will need to either dispatch your actions in 2 steps or you can use the action object to pass information withing reducers (just like we did with the req object in Express)


```jsx
// Action Creators
addTodo = (data) => ({type: "ADD_TODO", data })
addTodoSteps = (todoId, step) => ({type: "ADD_TODOSTEP", todoId, step })
addTodoWithStep = (todo, step) => ({type: "ADD_TODOWITHSTEP", todo, step})


// Dispatchers
const todos = function (state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat({id: state.length, todo: action.data})
        case 'ADD_TODOWITHSTEP':
            const newTodo = {id: state.length, todo: action.todo}
            const newTodoState = state.concat(newTodo)
            action.type = "ADD_TODOSTEP"
            action.todoId = newTodo.id
            return newTodoState
        default:
            return state
    }
}

// Dispatchers
const steps = function (state = [], action) {
    switch (action.type) {
        case 'ADD_TODOSTEP':
            return state.concat({id: state.length, todoId: action.todoId, step: action.step })
        default:
            return state
    }
}


// Build Store
const storeReducer = Redux.combineReducers({todos, steps})
const store = Redux.createStore(storeReducer)


// Dispatch addTodo
store.dispatch(addTodo("Understand Redux"))
store.getState() // => {todos: [{id: 0, "Understand Redux"}], steps: []}

// Dispatch addTodoSteps
store.dispatch(addTodoSteps(0, "read the documentation"))
store.getState()
// => {
//      todos: [{id: 0, "Understand Redux"}],
//      steps: [{id: 0, todoId: 0, step: "read the documentation"}]
//    }


//addTodoWithStep
store.dispatch(addTodoWithStep("Go On Vacation", "Look for tickets"))
store.getState()
// => {
//      todos: [{id: 0, "Understand Redux"}, {id: 1, "Go On Vacation"}],
//      steps: [{id: 0, todoId: 0, step: "read the documentation"},
//              {id: 1, todoId: 1, step: "Go On Vacation"}]
//    }
```

##### Subscribing to changes

Finally in redux it is possible to add actions that will be execute each time an action has been dispatched to the store. Watch out that the mechanism used in Redux its not particularly complex, and so no arguments or further will be passed to the function you want to execute.

```jsx
// we subscribe console.log to the store
store.subscribe( (..args) => console.log("we got " + args.length + " arguments"))

```

As it is the subscribed function will allways return ```"we got 0 arguments"```. Finally you can keep subscribing as many functions as you would like. All of them will be executed in the orther in which you added them to the store

