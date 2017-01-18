var toReactRender = function() {

    var multiply = function (a, b) {
        return a * b
    }

    var divide = function (a, b) {
        return a / b
    }

    function createState (obj) {
        return Object.assign({}, obj, {result: obj.operation(obj.v1 , obj.v2)})
    }

    class Operation extends React.Component {
        constructor(props) {
            super()
            this.state = createState({v1: 1, v2: 1, operation: props.operation || function () {}})
        }

        handleChange(event) {
            if (!event.target.value) return
            const toNewState= Object.assign({}, this.state, {[event.target.name]: parseInt(event.target.value)})
            this.setState( createState(toNewState) )
        }

        render() {
            const style = {width: "50px", display: "inline-block"}
            if (this.props.operation && typeof this.props.operation === "function"){
                return (
                    <div>
                        <span style={style}>{this.props.name}</span>
                        (
                        <input
                            onChange={this.handleChange.bind(this)}
                            name = "v1"
                            defaultValue={this.state.v1}
                            style={style}
                        />
                        {this.props.symbol}
                        <input
                            onChange={this.handleChange.bind(this)}
                            name = "v2"
                            defaultValue={this.state.v1}
                            style={style}
                        />
                        ) = {this.state.result}
                    </div>
                )
            } else{
                return (<div> {this.props.name} operation undefined or missing </div>)
            }

        }
    }

    class Operations extends React.Component {
        constructor(props){
            super()
        }
        render() {
            return (
                <div>
                    <Operation operation = {multiply} name = {"Multiply"}/>
                    <Operation operation = {divide} name = {"Divide"}/>
                    <Operation operation = {window.sum} name = {"Sum"}/>
                    <Operation operation = {window.subtract} name = {"subtract"}/>


                </div>
            )
        }
    }

    // render component
    reactRender = ReactDOM.render(
        <Operations/>,
        document.getElementById("tryMe")
    )
}

toReactRender()