var toReactRender = function() {
    class Counter extends React.Component {
        constructor(){
            super()
            this.state={value: 0}
            this.unmountCountDown = this.unmountCountDown.bind(this)
            this.cDownMessage = "component will unmount in "
        }
        handleClick(e){
            if (typeof this.state.value === "string") return
            this.setState({value: this.state.value + 1})
        }

        unmountCountDown(){
            const cDown = this.state.value.split(" ").slice(-1)[0] - 1
            if ( cDown === -1 ) {
                ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);
            } else {
                this.setState({value: this.cDownMessage + cDown })
            }
        }

        componentDidUpdate(prevProps, prevState){
            if(this.state.value > 3){
                this.setState({value: (this.cDownMessage + "3")})
            } else if ((typeof this.state.value === "string")) {
                setTimeout(this.unmountCountDown, 1000)
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