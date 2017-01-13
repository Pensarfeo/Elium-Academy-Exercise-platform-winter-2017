let reactRender
const toReactRender = function() {
    const definedfunction = window.modifyObject
    const modifyObject = window.modifyObject || function(){}

    function createState (obj) {
        let toMondObj
        try {
            eval("toMondObj =" + obj.v1)
        } catch(error){
            return Object.assign({}, obj)
        }
        modifyObject(toMondObj , obj.v2, obj.v3)
        return Object.assign({}, obj, {v1: JSON.stringify(toMondObj, null, 2)})
    }

    class Operation extends React.Component {
        constructor(props) {
            super()
            this.state = {v1: JSON.stringify({}), v2: "a", v3: 1}
        }

        handleChange(event) {
            let value = event.target.value
            if (!event.target.value) return
            if (!event.target.name === "v1") { value = JSON.parse(event.target.value) }
            const toNewState= Object.assign({}, this.state, {[event.target.name]: event.target.value})
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
                            {this.props.symbol}
                            <input
                                onChange={this.handleChange.bind(this)}
                                className="form-control"
                                name = "v2"
                                defaultValue={this.state.v2}
                                style={style}
                            />,
                            <input
                                onChange={this.handleChange.bind(this)}
                                className="form-control"
                                name = "v3"
                                defaultValue={this.state.v3}
                                style={style}
                            />
                        </span>
                        )
                        <div>
                            New content of object
                            <div>
                                {this.state.v1}
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
                    <Operation name = {"modifyObject"}/>
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