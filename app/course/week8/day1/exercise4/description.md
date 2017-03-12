#### Mixing react with redux!

together with the Redux Store create 2 react componets: AddStudent and ShowStudents. In this exercise you should mount both componets yourself though the functions shown below. The functionalities of the two react components should be the same as the [first EliumApp exercise](http://localhost:3000/week7/day4/exercise1).

```jsx
var renderAddSudent = function(store) {
    ReactDOM.render(
        <AddStudent store = {store}/>,
        document.getElementById("addStudent")
    )
}

var renderShowStudents = function(store) {
    ReactDOM.render(
        <ShowStudents store = {store}/>,
        document.getElementById("showStudents")
    )
}

```