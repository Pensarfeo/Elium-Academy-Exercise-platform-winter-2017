let reactRender
var toReactRender = function() {



    class ArgumentInput extends React.Component{
        render(){
            const style = {width: "100px", display: "inline-block", margin: "0 10px"}
            return (
                <span className="form-group">
                    <input
                        onChange={this.props.handleChange}
                        name = {this.props.name}
                        className="form-control"
                        defaultValue={this.props.defaut}
                        style={style}
                    />
                </span>
            )
        }
    }

    class Operation extends React.Component {
        constructor(props) {
            super()
            if (!props.fun || typeof props.fun !== "function" ) {
                this.safeFun = function(){}
            } else {
                this.safeFun = props.fun
            }
            const defaults = {}
            props.defaults.map((ele, i) => {
                defaults["v"+i] = JSON.stringify(ele)
            })
            this.state = this.createState(defaults, props.fun)
        }

        createState (obj) {
            const foFun = []
            for (var parg in this.state){
                if (parg[0]==="v"){
                    try {
                        eval("foFun.push(" + this.state[parg] + ")")
                    } catch(error){
                        try {
                            eval("foFun.push(\"" + this.state[parg] + "\")")
                        } catch(error){
                            return Object.assign({}, obj)
                        }
                    }
                }
            }
            const toMondObj = this.safeFun(...foFun)
            return Object.assign({}, obj, {result: JSON.stringify(toMondObj, null, 2)})
        }

        handleChange(event) {
            if (!event.target.value) return
            this.setState( Object.assign({}, this.state, {[event.target.name]: event.target.value}) )
        }

        handleClick(event) {
            console.log("clicked")
            debugger
            this.setState( this.createState(this.state) )
        }

        createInputs(len){
            const inputList = []

            for(var i = 0; i < len; i++){
                inputList.push(
                    <ArgumentInput
                        key = {i}
                        handleChange = {this.handleChange.bind(this)}
                        name = {"v" + i}
                        defaut = {this.state.v1}
                        condition = {this.condition}
                    />
                )
            }
            return inputList
        }

        render() {
            if (this.props.fun && typeof this.props.fun === "function"){
                return (
                    <div>
                        <div style={{display: "inline-block"}}>
                            <span>{this.props.name}(</span>
                                {this.createInputs(this.props.fun.length)}
                            )
                            <button
                                onClick={this.handleClick.bind(this)}
                                className="btn btn-primary"
                                style={{padding: "3px 12px", marginLeft: "10px"}}

                            > Execute Me </button>

                        </div>
                        <div>
                            <h4>Result</h4>
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
                    <Operation fun = {window.defaulted} name = {"last"} argNum = {1} defaults = {[null]}/>
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