var toReactRender = function() {
    class Counter extends React.Component {
        constructor(){
            super()
            this.state={value: 0}
        }
        handleClick(e){
            this.setState({value: this.state.value + 1})
        }
        shouldComponentUpdate(nextProps, nextState){
            console.log(nextState.value)
            return nextState.value % 2
        }
        render(){
            return(
                <div>
                    <div>{this.state.value}</div>
                    <button onClick={this.handleClick.bind(this)}>+</button>
                </div>
            )
        }
    }
    reactRender = ReactDOM.render(<Counter/>, document.getElementById("tryMe"))
}

toReactRender()