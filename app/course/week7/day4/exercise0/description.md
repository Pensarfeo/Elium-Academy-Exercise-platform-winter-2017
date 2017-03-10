#### Preparation
Today we are going to talk about Prop validation and context. While we are not going to have exercises about this it is good that you know about these concepts, specially context, since some tools that we are going to see next week make heavy use of it.

**Attention:** In orther to see the messages you need to get an updated version of the ReactSetup from today's presentation folder.


##### Prop Validation & Defaults
Just like in Mongoose schemas there is a way to validate props passed to a component. The sintax is quite straight forward.  You can look at the (react documentation)[https://facebook.github.io/react/docs/typechecking-with-proptypes.html] for more information.

```jsx
class MyComponent extends React.Component {
    render() {
        return (
            <div> {this.props.asdf} </div>
        );
    }
}

MyComponent.propTypes = {
    asdf: React.PropTypes.number
};

ReactDOM.render(
    // the error message will only go away when asdf is set to be a number
    <MyComponent asdf = {"123"}/>,
    document.getElementById("app")
)
```

Notice that although the error message is present the componet renders anyhow. Prop validation is react is more of a debuggin feature rather than an actual way of controlling what is being pass as a prop. Infact in recent versions of react the prop type validation will be turn of in production.
We can also use react to set a default value for our props.

```jsx

class Greeting extends React.Component {
    static propTypes = {
        name: React.PropTypes.number.isRequired
    }
    render () {
        return <h1>Hello, world! {this.props.name} greetings from me!</h1>;
    }
}

// Specifies the default values for props:
Greeting.defaultProps = {
    name: 'Stranger'
};

ReactDOM.render(
    <Greeting />,
    document.getElementById("app")
)
```

##### Context
through context we are able to pass information from a component to some other deeply nested component. As a beginner we do not use context, and even as an experience developer you should not use React context lightly since it breaks the unidireactional flow of information creating some kind of spagetti information flow. This is why next week we are going to see tools that make traking the inflomation flow more explicit.

```jsx
// this is the parent
class MessageList extends React.Component {
    //declare the infomation that will by passed through context
    getChildContext() {
        return {color: (this.props.color || "purple")};
    }

    render() {
        const children = this.props.messages.map((message, i) =>
                <Message key = {i} text={message.text}/>
        );
        return <div>{children}</div>;
    }
}
// To catch the information we need to declare the type of the recieved through context
MessageList.childContextTypes = {
    color: React.PropTypes.string
};

// this is the children
class Message extends React.Component {
    render() {
        return (
            <div>
                {this.props.text} --- <Button>Delete</Button>
            </div>
        );
    }
}

// this is the grand children
class Button extends React.Component {
    render() {
        return (
            <button style={{background: this.context.color}}>
                {this.props.children}
            </button>
        );
    }
}

// we need to declare the type of the information pass through context
Button.contextTypes = {
    color: React.PropTypes.string
};


ReactDOM.render (
    <MessageList messages={[{text: "asdf"}, {text: "xcvb"}, {text: "qwer"}]} color = "orange"/>,
    document.getElementById("app")
)
```
