var toReactRender = function() {
    class StudentData extends React.Component{
        render(){
            return (
                <div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Names</th> <th>Min Age</th> <th>Max Age</th> <th>Num Students</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {this.props.filtered.join(",")}
                                </td>
                                <td>
                                    {this.props.min}
                                </td>
                                <td>
                                    {this.props.max}
                                </td>
                                <td>
                                    {this.props.filtered.length}
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
    }

    class AddStudnetName extends React.Component{
        constructor(){
            super()
            var initStudents = {}
            this.state = {min: 0, max: 100, students: initStudents}
            this.state.filtered = this.filterStudents(initStudents)
        }

        handleSubmit(event){
            event.preventDefault()
            var name = event.target.elements.fullname.value
            var age = event.target.elements.age.value
            this.students = Object.assign({}, this.state.students)
            this.students[age] = (this.students[age] || []).concat(name)
            this.setState(Object.assign({},this.state, {students: this.students}, {filtered: this.filterStudents(this.students)}))
        }
        handleFilterSubmit(event){
            event.preventDefault()
            this.setState(Object.assign({},this.state, {filtered: this.filterStudents(this.state.students)}))
        }
        handleChange(event){
            this.setState(Object.assign({}, this.state, {[event.target.name]: event.target.value}))
        }
        filterStudents(students){
            var filtered = []
            Object.keys(students).map( ele => {
                if (parseInt(ele) >= this.state.min && parseInt(ele) <=this.state.max) filtered.push(students[ele])
            })

            return [].concat(...filtered)
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
                        <input type = "submit" id ="student" className="btn btn-default" value="Add Student" style={{width: "310px"}}/>
                    </form>
                    <form className="form-group" onSubmit={this.handleFilterSubmit.bind(this)}>
                        <div style = {{marginBottom: "10px"}}>
                            <label for="fullname" style={{width: "100px", marginRight: "0 5px"}}> Min Age: </label>
                            <input type="text" className="form-control" onChange= {this.handleChange.bind(this)} name="min" defaultValue = {this.state.min} style={{width: "200px", display: "inline-block"}}/>
                        </div>
                        <div style = {{marginBottom: "10px"}}>
                            <label for="cost" style={{width: "100px", marginRight: "0 5px"}}> Max Age: </label>
                            <input type="number" className="form-control" onChange= {this.handleChange.bind(this)} name="max" defaultValue = {this.state.max} style={{width: "200px", display: "inline-block"}}/>
                        </div>
                        <input type = "submit" id ="filter" className="btn btn-default" value="Filter" style={{width: "310px"}}/>
                    </form>

                    <StudentData filtered={this.state.filtered} min = {this.state.min} max = {this.state.max} />
                </div>
                )
        }
    }
    reactRender = ReactDOM.render(<AddStudnetName/>, document.getElementById("tryMe"))
}

toReactRender()