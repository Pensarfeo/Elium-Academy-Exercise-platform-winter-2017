let reactRender
const toReactRender = function() {
    const definedfunction = window.insideOut
    const modifyObject = definedfunction || function(){}

    function createState (obj) {
        let toFlip
        try {
            eval("toFlip =" + obj.v1)
        } catch(error){
            return Object.assign({}, obj)
        }
        const toMondObj=modifyObject(toFlip)
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
                    <Operation name = {"insideOut"}/>
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