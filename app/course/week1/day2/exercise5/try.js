var toReactRender = function() {
    const definedfunction = window.last
    const safeDefinedFunction = definedfunction || function(){}

    function createState (obj) {
        let toLast
        try {
            eval("toLast =" + obj.v1)
        } catch(error){
            return Object.assign({}, obj)
        }
        const toMondObj=safeDefinedFunction(toLast)
        return Object.assign({}, obj, {result: JSON.stringify(toMondObj, null, 2)})
    }

    class Operation extends React.Component {
        constructor(props) {
            super()
            this.state = {v1: JSON.stringify({})}
        }

        handleChange(event) {
            if (!event.target.value) return
            const toNewState= Object.assign({}, this.state, {[event.target.name]: event.target.value})
            this.setState( createState(toNewState) )
        }

        render() {
            const style = {width: "100px", display: "inline-block", margin: "0 10px"}
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
                            />
                        </span>
                        )
                        <h6>*use the console to verify the object order</h6>
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