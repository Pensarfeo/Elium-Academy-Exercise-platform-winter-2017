var toReactRender = function() {
    class DataRow extends React.Component{
        render(){
            return (
                <tr>
                    <td>
                        {this.props.names.join(",")}
                    </td>
                    <td>
                        {this.props.age}({this.props.names.length})
                    </td>
                </tr>
            )
        }
    }

    const filterByAge = function(arr) {
        outputObj = {}
        arr.map((ele) => {
            outputObj[ele[1]] = (outputObj[ele[1]] || []).push(ele)
        })
        return outputObj
    }

    class StudentData extends React.Component{
        render(){
            return (
                <div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th> <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(this.props.data).map((ele, i)  => {
                                return <DataRow key = {i} age = {ele} names = {this.props.data[ele]} />
                            })}
                        </tbody>
                    </table>
                </div>
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
            var age = event.target.elements.age.value
            age = age > 35 ? "Youth is wasted on the Young" : age
            var newState = Object.assign({}, this.state)
            newState[age] = (newState[age] || []).concat(name)
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
                            <label for="cost" style={{width: "100px", marginRight: "0 5px"}}> Age: </label>
                            <input type="number" className="form-control" name="age" style={{width: "200px", display: "inline-block"}}/>
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