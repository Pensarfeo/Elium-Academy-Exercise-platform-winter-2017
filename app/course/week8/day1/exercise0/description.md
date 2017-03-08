#### Preparation

This will be your first react coponent. There are 3 ways of creating react components: We will only see 2 (the third one is deprecated!). Today we will se how to make react components with functions only! Tomorrow we will see how to use ES6 classes for that purpose. The purpose of this exercise is for you to get some insights inside react before the explanation. To use it Please use the set up folder that is in the same folder as today's presentation. Edit the HTML documennt to explore these exericses.

##### Example 1

While a react component describes what to do, nothing will be rendered unless we tell react so. This is done through ReactDOM.render. The first argument of this method is the component you want to render (only one can be passed). The second Argument is the location of the DOM element in which you want to put your component.
As you notice we are writing HTML withing JavaScript. This is possible because we are using the <b>type="text/babel"</b> instead of the ```type="text/javascript"```. This way or writing is a variation on javascript that its called JSX. Attetion; we can write more than just plain HTML!

```jsx
<script type="text/babel" charset="utf-8">
    ReactDOM.render(
        <div>Hello you</div>,
        document.getElementById('1')
    )
</script>
```

##### Example 2

Ofcourse this will not be very usefull. React also allowes us to declare React Componets through functions. These are called **Stateless Components!**. To render a stateless component we call it as if it were a custum HTML tag (in this case it would be called XML)

```jsx
const MyFirstComponent = function(){
    return <div> Bye Your </div>
}
ReactDOM.render(
    <MyFirstComponent/>,
    document.getElementById('2')
)

const MyOtherComponent = function(){
    return <div> I Am Back </div>
}
ReactDOM.render(
    <MyOtherComponent/>,
    document.getElementById('3')
)

```

###### Practise

Make the following Examples Work (tip, you only need to change one letter!!!)

```jsx
const mySecondComponent = function(){
    return <div> Bye Your </div>
}
ReactDOM.render(
    <mySecondComponent/>,
    document.getElementById('4')
)
```

##### Example 3

Just like any other function, in orther to be useful, it needs to accept variables. Any stateless react component will take only one variable (called prop) that its an object. Since React is mostly used through XML reppresentation of the components; they way of passing data is by adding attributes the component we want to render. These attributes will be gathered withing the component.

```jsx

const PassingPropComponent = function(props){
    return <div> Bye {props.name} </div>
}
ReactDOM.render(
    <PassingPropComponent name={"Student"}/>,
    document.getElementById('5')
    )
```

##### Example 4

Just displaying one componet at the time would not be so usefull either. Just like in plain HTML we would like to be able to put component withing other components so that we can create usefull structures. In react the children of the components written in XML style get passed to the parent compoents as props as well. Notice that the curly brackets are to react what the &lt;%%&gt; are to EJS

```jsx
const ParentComponent = function(props){
    return <div> Bye {props.children} </div>
}
const ChildrenComponent = function(props){
    return <div> I the {props.child} child </div>
}


ReactDOM.render(
    <ParentComponent>
        <ChildrenComponent child={"first"}/>
        <ChildrenComponent child={"second"}/>
    </ParentComponent>
    ,
    document.getElementById('6')
)
```

###### Practise
Make the following Examples Work

```jsx
const FixMe0 = function(props){
    return <div> I am rendered! </div>
}

ReactDOM.render(
    <FixMe0>,
    document.getElementById('7')
)
ReactDOM.render(
    </FixMe0>,
    document.getElementById('8')
)

const FixMe1 = function(props){
    return <div> Hello === {props.hello} //=> true!! </div>
}
const fixMeValue = "Hello"

ReactDOM.render(
    <FixMe1 hello = fixMeValue />,
    document.getElementById('9')
)
```

##### Example 5

Withing curly brakets we can also write some JavaScript. However, since we are actually writing Javascript inside XML inside Javascript, we can only write simple stuff; mostly functions, ternary operators (Not if elses!) and array map.

```jsx
var ConditionalComponent1 = function (props){
    const who = 'class'
    return <span> {true ? "Hello" : "Bye"} {who}</span>
};

ReactDOM.render(
    <ConditionalComponent1 />,
    document.getElementById('10')
)

function NumberList(props) {
  const numbers = [1,2,3,4,5];
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

ReactDOM.render(
    <NumberList />,
    document.getElementById('11')
)
```