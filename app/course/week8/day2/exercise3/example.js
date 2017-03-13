var toReactRender = function() {
    class DisplayName extends React.Component{
        constructor(props){
            super()
            this.name =  props.name[0].toUpperCase() + props.name.slice(1, props.name.length)
            this.surnameStyled = props.surname[0].toUpperCase() + props.surname.slice(1, props.surname.length)
            this.initial =  this.surnameStyled[0].toUpperCase()+"."
            this.state = {visible: this.initial }
        }

        handleMouseEnter(){
                this.setState({visible: this.surnameStyled})
        }

        handleMouseOut(){
                this.setState({visible: this.initial})
        }

        render(){
            return (
                <tr>
                    <td>{this.name}</td>
                    <td onMouseEnter = {this.handleMouseEnter.bind(this)}
                        onMouseOut = {this.handleMouseOut.bind(this)}>
                        {this.state.visible}
                    </td>
                </tr>
            )
        }
    }

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
                        {this.props.names.map((ele, i)  => {
                            return <DisplayName key = {i} name = {ele[0]} surname = {ele[1]} />
                        })}
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