#### Preparation
Today we are going to look into Statefull React Components, States (what they are, and how to change them) and events.

##### Statefull Components
Statefull components are written with ES6 class syntax. The most minimalistic statefull react components you can have is the following.

```jsx
class HelloBox extends React.Component {
    render () {
        return <div> Hello, I am Stefull Component </div>
    }
}

ReactDOM.render(
    <HelloBox/>,
    document.getElementById('app')
)

```

The name of the name of the component is ```HelloBox```. Any Statefull React component **MUST HAVE A RENDER METHOD**. Also Notice the slight variation in syntax for the render method.

###### Practice
Fix the following examples

```jsx
class HelloBox extends React.Component {
    someOutput () {
        return <div> Hello, I am Stefull Component </div>
    }
}

ReactDOM.render(
    <HelloBox/>,
    document.getElementById('app')
)

class HelloBox {
    render () {
        return <div> Hello, I am Stefull Component </div>
    }
}

ReactDOM.render(
    <HelloBox/>,
    document.getElementById('app')
)


```

##### Constructor
The constructor function of a react component defines some actions that will happen the first time the component is called.

```jsx
class TimeBox extends React.Component {
    constructor(props){
        super()
        // TimeBox is an object; and thus we can use this within it!
        this.time = (new Date).toString()
    }
    render () {
        return <div> Right Now its <p> {this.time} </p> </div>
    }
}

ReactDOM.render(
    <TimeBox/>,
    document.getElementById('app')
)

```

The constructor function only gets one argument, the props object. Also, if the constructor function is defined, in orther to create a proper react componet, we MUST call the super method within ghte constructor function. ```this.time``` will give you a new value every time the component is created.

###### Practice
Fix the following examples

```jsx
class TimeBox extends React.Component {
    constructor(props){
        this.time = (new Date).toString()
    }

    render () {
        return <div> Right Now its <p> {this.time} </p> </div>
    }
}

ReactDOM.render(
    <TimeBox/>,
    document.getElementById('app')
)


class TimeBox extends React.Component {
    constructor(props){
        const time = (new Date).toString()
    }
    render () {
        return <div> Right Now its <p> {time} </p> </div>
    }
}

ReactDOM.render(
    <TimeBox/>,
    document.getElementById('app')
)


```

##### props 
To access the props withing the constructor function we use the argument given. Hover, in any other class method; we need to call the props through ```this.props```.

```jsx
class TimeBox extends React.Component {
    constructor(props){
        super()
        // TimeBox is an object; and thus we can use this within it!
        this.time = props.time.toString()
    }
    render () {
        return <div> Right Now its <p> {this.time} </p> in {this.props.country} </div>
    }
}

ReactDOM.render(
    <TimeBox time = {new Date} country = "Pedro Land"/>,
    document.getElementById('app')
)
```

*Note:* **DO NOT MODIFY THE PROPS OBJECT!!!!**
It's a really bad practice since the prop object is controlled by react itself. Instead you can pass some values withing the class with the classes's ```this``` object (```this.somethign```).

###### Practice
Fix the following example

```jsx
class TimeBox extends React.Component {
    constructor(props){
        super()
        this.myProps = this.props
        this.time = props.time.toString()
    }
    render () {
        return <div> Right Now its <p> {this.time} </p> in {this.myProps.country} </div>
    }
}

ReactDOM.render(
    <TimeBox time = {new Date} country = "Pedro Land"/>,
    document.getElementById('app')
)
```

##### State
State is a way to update React components when something happens. There are a few important thigs to remember.
**In general you want to create your initial state withing the constructor function**

```jsx
class TimeBox extends React.Component {
    constructor(props){
        super()
        this.state = {time: props.time.toString(), country: props.country}
    }
    render () {
        return <div> Right Now its <p> {this.state.time} </p> in {this.state.country} </div>
    }
}

ReactDOM.render(
    <TimeBox time = {new Date} country = "Pedro Land"/>,
    document.getElementById('app')
)
```



##### Events
Events are what happens when an action is executed on React Comoponents. This is not dissimilar to what we where doing with jQuery, but the sintax has changed a bit. When we define an event we want 2 things:
1) Define an event handler withing the React Comonent
2) Bind the value of this within the component. Even if you don't know what it means; it does not matter. Just use it as a recipe!
The most comon type of event is the ```onClick``` event. However there are [many others](https://facebook.github.io/react/docs/events.html)


```jsx
class TimeNow extends React.Component {
    constructor(props){
        super()
        this.state = {time: (props.time || new Date).toString(), country: props.country}
    }

    handleClick(event){
        console.log(new Date)
    }

    render () {
        return <div onClick = {this.handleClick.bind(this)}> Right Now its <p> {this.state.time} </p> in {this.state.country} </div>
    }
}

ReactDOM.render(
    <TimeNow country = "Pedro Land"/>,
    document.getElementById('app')
)

```

*.bind(this):* Fixes the value of this withing the function to be what ever you want.

###### Practice
Fix the following examples

```jsx
class TimeNow extends React.Component {
    constructor(props){
        super()
        this.state = {time: (props.time || new Date).toString(), country: props.country}
    }

    handleClick(event){
        console.log(new Date)
    }

    render () {
        return <div onClick = {this.handleClick}> Right Now its <p> {this.state.time} </p> in {this.state.country} </div>
    }
}

ReactDOM.render(
    <TimeNow country = "Pedro Land"/>,
    document.getElementById('app')
)

class TimeNow extends React.Component {
    constructor(props){
        super()
        this.state = {time: (props.time || new Date).toString(), country: props.country}
    }

    handleClick(event){
        console.log(new Date)
    }

    render () {
        return <div onclick = {this.handleClick}> Right Now its <p> {this.state.time} </p> in {this.state.country} </div>
    }
}

ReactDOM.render(
    <TimeNow country = "Pedro Land"/>,
    document.getElementById('app')
)
```


##### setState

By Itself this.state is not very useful; and it just seems like an other way to write the same things. Using the state however its important because every react component has access to a function called ```this.setState``` that will not only change the value of the state, but also rerender the component in case the value of the state has changed. ```this.state``` works in a simmilar fascion to [Object.assign](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

```jsx
class TimeNow extends React.Component {
    constructor(props){
        super()
        this.state = {time: (props.time || new Date).toString(), country: props.country}
    }

    handleClick(event){
        this.setState({time: (new Date).toString()})
        // equivalente to setting
        // this.state = Object.assign({}, this.state, {time: new Date})
        // and rerender the component!
    }

    render () {
        return <div onClick = {this.handleClick.bind(this)}> Right Now its <p> {this.state.time} </p> in {this.state.country} </div>
    }
}

ReactDOM.render(
    <TimeNow country = "Pedro Land"/>,
    document.getElementById('app')
)

```
###### Practice
Fix the following example

```jsx
class TimeNow extends React.Component {
    constructor(props){
        super()
        this.state = {time: (props.time || new Date).toString(), country: props.country}
    }

    handleClick(event){
        this.state = {time: new Date, country: "new Country"}
    }

    render () {
        return <div onClick = {this.handleClick.bind(this)}> Right Now its <p> {this.state.time} </p> in {this.state.country} </div>
    }
}

ReactDOM.render(
    <TimeNow country = "Pedro Land"/>,
    document.getElementById('app')
)

```







