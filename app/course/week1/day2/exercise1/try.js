let reactRender
const toReactRender = function() {
    class MyClass extends React.Component {
        constructor(props){
            super()
            if (typeof props.data === "object"){
                this.state = {list: props.data}
            } else {
                this.state = { list: {}}
            }
            debugger;
            this.handleSelect = this.handleSelect.bind(this)
        }
        handleSelect(event){
            console.log(this.state)
            this.setState(Object.assign({}, this.state, {name: this.state.list[event.target.value]}) )
        }
        render() {
            return (
                <div>
                    <p>
                        <span> Select a Surname </span> 
                        <select onChange={this.handleSelect} defaultValue="default" >
                            <option value="default" disabled> Select a surname ... </option>
                            { Object.keys(this.state.list).map((ele) => <option value={ele} key={ele}>{ele}</option> )}
                        </select>
                    </p>
                    <p>
                        <span> Name: </span>
                        <span> {this.state.name || "No Name selected or myClass object not found" }</span>
                    </p>
                </div>
            )
        }
    }
    reactRender = ReactDOM.render(<MyClass data={window.myClass || {}}/>, document.getElementById("tryMe"))
}

toReactRender()