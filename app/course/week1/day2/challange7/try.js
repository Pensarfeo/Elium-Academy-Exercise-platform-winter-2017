let reactRender
const toReactRender = function() {
    const definedfunction = window.Calculator
    const safeDefinedFunction = definedfunction || function(){}

    function createState (obj) {
        let result = safeDefinedFunction(obj.v1, obj.v2, obj.v3)
        return Object.assign({}, obj, {result: result})
    }

    class Operation extends React.Component {
        constructor(props) {
            super()
            this.state = {v1: "", v2: 1, v3: 1, result: "choose an valid operation"}
        }

        handleChange(event) {
            var name  = event.target.name
            var value = event.target.value
            if (!value) return
            if (name==="v1" && !~["sum", "multiply", "subtract", "divide"].indexOf(value)) return
            const toNewState = Object.assign({}, this.state, {[name]: value})
            this.setState( createState(toNewState) )
        }

        render() {
            const style = {width: "100px", display: "inline-block", margin: "10px"}
            if (definedfunction && typeof definedfunction === "function"){
                return (
                    <div>
                        <span>{this.props.name}(</span>
                        <span className="form-group">
                            <input
                                onChange={this.handleChange.bind(this)}
                                name = "v1"
                                className="form-control"
                                defaultValue={this.state.v1}
                                style={style}
                            />,
                            <input
                                onChange={this.handleChange.bind(this)}
                                name = "v2"
                                className="form-control"
                                defaultValue={this.state.v2}
                                style={style}
                            />,
                            <input
                                onChange={this.handleChange.bind(this)}
                                name = "v3"
                                className="form-control"
                                defaultValue={this.state.v3}
                                style={style}
                            />

                        </span>
                        )
                        <div>
                            New content of object
                            <div>
                                {this.state.result}
                            </div>
                        </div>
                    </div>
                )
            } else {
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
                    <Operation name = {"last"}/>
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