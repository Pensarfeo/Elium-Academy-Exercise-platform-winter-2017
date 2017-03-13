var toReactRender = function() {
    //asdfasdfasdfasdf
    class DataRow extends React.Component{

        render(){
            console.log("sdfg")
            if (this.props.data[0] < this.props.data[1] ) {
                alert("Student" + this.props.name + " "  + "paid too much")
                this.style = {backgroundColor: "yellow"}
            } else if (this.props.data[0] === this.props.data[1]) {
                this.style = {backgroundColor: "green"}
            } else if (this.props.data[0] > this.props.data[1]) {
                this.style = {backgroundColor: "red"}
            }
            return (
                <tr>
                    <td>
                        {this.props.name}
                    </td>
                    <td>
                        {this.props.data[0]}
                    </td>
                    <td style={this.style}>
                        {this.props.data[1]}
                    </td>

                </tr>
            )
        }
    }

    class StudentData extends React.Component{
        componentWillReceiveProps(nextProps){
        }
        shouldComponentUpdate(){
            return true
        }
        render(){
            return (
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th> <th>Cost</th> <th>Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(this.props.data).map((ele, i)  => {
                            return <DataRow key = {i} name = {ele} data = {this.props.data[ele]} />
                        })}
                    </tbody>
                </table>
            )
        }
    }

    class AddStudnetName extends React.Component{
        constructor(){
            super()
            this.state = {}
        }
        handleSubmit(event){
            event.preventDefault()
            var name = event.target.elements.fullname.value
            var cost = event.target.elements.cost.value
            var paid = event.target.elements.paid.value
            var newState = Object.assign({}, this.state, {[name]: [cost, paid]})
            this.setState(newState)
        }
        render(){
            return (
                <div>
                    <form className="form-group" onSubmit={this.handleSubmit.bind(this)}>
                        <div style = {{marginBottom: "10px"}}>
                            <label for="fullname" style={{width: "100px", marginRight: "0 5px"}}> Full name: </label>
                            <input type="text" className="form-control" name="fullname" style={{width: "200px", display: "inline-block"}}/>
                        </div>
                        <div style = {{marginBottom: "10px"}}>
                            <label for="cost" style={{width: "100px", marginRight: "0 5px"}}> Course Cost: </label>
                            <input type="number" className="form-control" name="cost" style={{width: "200px", display: "inline-block"}}/>
                        </div>
                        <div style = {{marginBottom: "10px"}}>
                            <label for="paid" style={{width: "100px", marginRight: "0 5px"}}> Paid: </label>
                            <input type="number" className="form-control" name="paid" style={{width: "200px", display: "inline-block"}}/>
                        </div>
                        <input type = "submit" className="btn btn-default" value="Send" style={{width: "310px"}}/>

                    </form>
                    <StudentData data={this.state} />
                </div>
                )
        }
    }
    reactRender = ReactDOM.render(<AddStudnetName/>, document.getElementById("tryMe"))
}

toReactRender()