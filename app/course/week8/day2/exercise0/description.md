#### Preparation
Today we are going to look into a much more powerfull way of connecting the redux store with react. To do so we need to add the following [package](https://cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.3/react-redux.min.js) to our set up.
React-redux provides 1 component and 1 method that will use context to connect the store to any react component.


##### Provider

If using react redux we will will use the Provider component defined by React-Redux. Whith should be the top most component of our application and will take the store as a prop.

```jsx
ReactDOM.render(
  <Provider store={store}>
    <AddStudent>
    <ShowStudnets/>
  </Provider>,
  document.getElementById('root')
)
```

##### Provider

However, in the previous example, none of the children components will have access to the store by default. To do so we need connect them to the Provider. React-Redux uses context to do so; and this is done through the connect method. This method can take at least to arguments. The first one is a function that will be used to pass specific sub-states a props (called mapStateToProps), and the second one is a function to pass specific dispatch actions as props (mapDispatchToProps).

```jsx

// Since we do not need to have access to the state, we can pass the first arguments as null.
// in this case the ConnectedAddStudent component will no be passed any part of the state as props
// but the dispatch function will be avaliable through
// this.props.addStudent

const ConnectedAddStudent = connect(null, mapDispatchToProps)(AddStudent)

function mapDispatchToProps(storeDispatch) {
  return {addStudent: (data) => {storeDispatch({type: “ADD_STUDENT”, data: data})}}
}


// Since in this case we do not need to have access to the dispatch method, we only pass the first argument.
// in this case the ConnectedShowStudents component will have access to the array of students though
// this.props.students

const ConnectedShowStudents = connect(mapStateToProps)(ShowStudents)

function mapStateToProps(state) {
  return { students: state.students }
}


```







