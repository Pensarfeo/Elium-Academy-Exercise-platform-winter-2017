#### Preparation
Today we are going to look into a much more powerful way of connecting the Redux store with react. To do so we need to add the following [package](https://cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.3/react-redux.min.js) to our set up.
React-Redux provides 1 component and 1 method that we will use context to connect the store to any react component.


##### Provider

When using React-Redux we will use the Provider component defined by it. Such component should be the top most component of our application and will take the store as a prop.

```jsx
ReactDOM.render(
  <Provider store={store}>
    <AddStudent>
    <ShowStudnets/>
  </Provider>,
  document.getElementById('root')
)
```

This component will now be responsible for passing down both the store sub-states and the store.dispatch methods to is children through the comment method.

##### Connect

In the previous example, none of the children components will have access to the store by default. To do so we need connect them to the Provider. React-Redux uses context to do so; and this is done through the ```connect``` method. This method can take at least 2 arguments. The first one is a function that will be used to pass specific sub-states a props (called ```mapStateToProps```), and the second one is a function to pass specific dispatch actions as props (```mapDispatchToProps```). The connect method will return a new component that we can use in place of the old one with all the functionalities of the previous component but with extra properties added to the available props.

As an Example we look at who to split our EliumApp in two components. The first one will allow us to add student only (called AddStudents) while the second one will show the list of students only (called ShowStudents).

1. Since within our AddStudent Component we do not need to have access to the state, we can pass the first arguments of the connect method as null. In such case the ConnectedAddStudent component will no be passed any part of the state as props
but the dispatch function will be available through ```this.props.addStudent```. 
```jsx
const ConnectedAddStudent = connect(null, mapDispatchToProps)(AddStudent)
const addStudent = (data) => {storeDispatch({type: “ADD_STUDENT”, data: data})}
function mapDispatchToProps(storeDispatch) {
  return {addStudent: addStudent}
}
```

2. Now we can also connect ShowStudents. In this case we do not need to have access to the dispatch method state. As a result we only need to pass the mapStateToProps function to the connect method.
```jsx
const ConnectedShowStudents = connect(mapStateToProps)(ShowStudents)
function mapStateToProps(state) {
  return { students: state.students }
}
```

In conclusion we are not able to access both the store and the dispatch methods from different components independently as follows: 

```jsx
ReactDOM.render(
  <Provider store={store}>
    <ConnectedAddStudent>
    <ConnectedShowStudents/>
  </Provider>,
  document.getElementById('root')
)
```

Remember that usually both sub-states and the dispatch method will be needed between your component so you will need to pass both arguments at once! 








