var toReactRender = function() {
    class Counter extends React.Component {
        constructor(){
            super()
            this.state={value: 0}
        }
        handleClick(e){
            this.setState({value: this.state.value + 1})
        }

        componentDidUpdate(prevProps, prevState){
            if(this.state.value=== 10){
                this.setState({value: 0})
            }
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