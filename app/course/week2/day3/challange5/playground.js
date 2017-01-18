var toReactRender = function() {
    class DisplayName extends React.Component {
        constructor(props){
            super()
            this.names = props.name.split(" ") 
            this.name =  this.names[0][0].toUpperCase() + this.names[0].slice(1, this.names[0].length)
            this.surnameStyled = this.names[1][0].toUpperCase() + this.names[1].slice(1, this.names[1].length)
            this.initial = this.surnameStyled[0] + "."
            this.state = {visible: this.initial}
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
                            return <DisplayName key = {i} name = {ele} />
                        })}
                    </tbody>
                </table>
            )
        }
    }

    class Course extends React.Component {
        render(){
            return (
                <div>
                    <h3>{this.props.courseName}</h3>
                    <p>This is a list of all the Elium students enrolled in the {this.props.courseName} course:</p>
                    <DisplayNames names={this.props.nameList}/>
                </div>
            )
        }
    }

    class AddStudnetName extends React.Component{
        constructor() {
            super()
            this.state = {Java: [], Node: [], PHP: [], "c++": [], all: [], allVisible: false}
        }

        handleSubmit(event){
            event.preventDefault()
            var name = event.target.elements.fullname.value
            var names = name.split(" ")
            if (names.length !==2) {
                alert('Correct format is "first name + space + surname".')
                return
            }
            var course = event.target.elements.course.value
            var newState = Object.assign({}, this.state)
            var newNameList = newState[course].slice()
            var allNames = newState.all.slice()
            if ( !newNameList.includes(name) ) newNameList.push(name)
            if ( !allNames.includes(name) ) allNames.push(name)

            newState[course] = newNameList
            newState.all = allNames
            console.log(allNames)
            this.setState(newState)
        }
        handleAllButtonClick(){
            this.setState(Object.assign({}, this.state, {allVisible: !this.state.allVisible}))
        }
        displayAll(){
            if (this.state.allVisible) {
                return <DisplayNames names={this.state.all} />
            } else {
                return
            }
        }
        render(){
            var style = {width: "200px", margin: "0 5px", display: "inline-block"}
            return (
                <div>
                    <form className="form-group" onSubmit={this.handleSubmit.bind(this)}>
                        <label for="fullname">Full name: </label>
                        <input type="text" className="form-control" name="fullname" style={style}/>
                        <select defaultValue="default" className="form-control" name="course" style={style}>
                            <option value="default" disabled> Select Programm ... </option>
                            { ["Java","c++", "Node", "PHP"].map((ele) => <option value={ele} key={ele}>{ele}</option> )}
                        </select>
                        <input type = "submit" className="btn btn-default" value="Send" />
                    </form>
                    <Course courseName = {"Java"}  nameList ={this.state.Java} />
                    <Course courseName = {"Node"}  nameList ={this.state.Node} />
                    <Course courseName = {"PHP"}   nameList ={this.state.PHP} />
                    <Course courseName = {"c++"}   nameList ={this.state["c++"]} />
                    <button
                        className="btn btn-default"
                        onClick = {this.handleAllButtonClick.bind(this)}
                        style = {{width: "100%", marginBottom: "10px"}}
                        > Show All Students </button>
                    { this.displayAll.bind(this)() }
                </div>
                )
        }
    }
    reactRender = ReactDOM.render(<AddStudnetName/>, document.getElementById("tryMe"))
}

toReactRender()