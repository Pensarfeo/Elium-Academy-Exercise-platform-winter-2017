#### Preparation
Today we are going to look into React component's lifeCycle. This is a way of doing actions as a component reloads, mount or unmounts.


##### Mounting and unmounting components

Life cycle method get trigered by react on key moments of the method's lifecycle. An example is the componentWillMount; that triggers before the components its mounted by ReactDOM.Render, the componentDidMount that gets triggered once the component is mounted, and the component will unmount that gets triggered before the component it unounted.

```jsx
class CountdownTimer extends React.Component{
    constructor() {
        console.log("this happens first")
        super();
        this.tick = this.tick.bind(this)
    }

    tick() {
        // this.setState is asyncronous; so if we want to make sure that an action happens after the setState has executed, we should put it withing a call back.
        this.setState({secondsRemaining: this.state.secondsRemaining - 1}, () => {
            if (this.state.secondsRemaining <= 0) {
                clearInterval(this.interval);
                ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode)
            }
        });
    }

    componentWillMount () {
        // putting logic here is nearly equivalent to putting it in the constructor; with the exeption that this.props is defined here.
        console.log("this happens second")
        this.state = {secondsRemaining: this.props.secondsRemaining}
    }

    render() {
        return (
            <div>Seconds Remaining: {this.state.secondsRemaining}</div>
        );
    }

    componentDidMount() {
        // this is called once the component mounted. Here we can add functionalities that will change the state safely
        console.log("this happens third")
        this.interval = setInterval(this.tick, 1000);   
    }

    componentWillUnmount() {
        // this is called only if the component is umounted.
        console.log("this happens fourth; the component was unmounted")
        clearInterval(this.interval);
    }

};

ReactDOM.render(
    <CountdownTimer secondsRemaining = {5}/>,
    document.getElementById('app')
)

```

##### To rerender or not to rerender

There is particular react component that can control if a component is actually rerendered when the state is changed. Updating the DOM is expesive, so it is adviced to avoid doing it if not absolutelly necessary. In the following example we only update the component if the ```this.state.secondsRemaining``` is even.


```jsx
class CountdownTimer extends React.Component{
    constructor() {
        console.log("this happens first")
        super();
        this.tick = this.tick.bind(this)
    }

    tick() {
        this.setState({secondsRemaining: this.state.secondsRemaining - 1}, () => {
            if (this.state.secondsRemaining < 0) {
                clearInterval(this.interval);
                ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode)
            }
        });
    }

    componentWillMount () {
        console.log("this happens second")
        this.state = {secondsRemaining: this.props.secondsRemaining}
    }

    render() {
        return (
            <div>Seconds Remaining: {this.state.secondsRemaining}</div>
        );
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("the new state is =>", nextState)
        console.log("the old state is =>", this.state)
        return !(nextState.secondsRemaining % 2) || nextState.secondsRemaining === 0
    }

    componentDidMount() {
        console.log("this happens third")
        this.interval = setInterval(this.tick, 1000);   
    }

    componentWillUnmount() {
        console.log("this happens fourth; the component was unmounted")
        clearInterval(this.interval);
    }

};

ReactDOM.render(
    <CountdownTimer secondsRemaining = {5}/>,
    document.getElementById('app')
)

```

This methods are particularly usefull when we render components that depend on data sent from the browser that might or might not be present at the monent of render.


