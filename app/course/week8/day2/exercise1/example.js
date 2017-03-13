var toReactRender = function() {
    class DisplayNames extends React.Component{
        render(){
            return (
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th> <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.names.map( (ele, i)  =>{
                                                    return <tr key = {i}>
                                                        <td>{ele[0]}</td>
                                                        <td>{ele[1]}</td>
                                                    </tr>}
                        )}
                    </tbody>
                </table>
            )
        }
    }
    class AddStudnetName extends React.Component{
        constructor(){
            super()
            this.state = {names: []}
        }
        handleSubmit(event){
            event.preventDefault()
            var names = event.target.elements.fullname.value.split(" ")
            var newNames = this.state.names.slice()
            newNames.push(names)
            this.setState({names: newNames})
        }
        render(){
            return (
                <div>
                    <form className="form-group" onSubmit={this.handleSubmit.bind(this)}>
                        <label for="fullname">Full name: </label>
                        <input type="text" className="form-control" name="fullname" style={{width: "200px", margin: "0 5px", display: "inline-block"}}/>
                        <input type = "submit" className="btn btn-default" value="Send" />
                    </form>
                    <DisplayNames names={this.state.names} />
                </div>
                )
        }
    }
    reactRender = ReactDOM.render(<AddStudnetName/>, document.getElementById("tryMe"))
}

toReactRender()