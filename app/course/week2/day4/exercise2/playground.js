var toReactRender = function() {
    //asdfasdfasdfasdf
    class DataRow extends React.Component{

        render(){
            return (
                <tr>
                    <td>
                        {this.props.name}
                    </td>
                    <td>
                        {this.props.age}
                    </td>
                </tr>
            )
        }
    }

    class StudentData extends React.Component{
        constructor(props){
            super()
            var data = Object.keys(props.data).map((ele) => [ele, props.data[ele]] )
            this.state = {data: data}
            this.sortingOrderAge = 1
            this.sortingOrderName = 1
        }
        componentWillReceiveProps(nextProps){
            var data = Object.keys(nextProps.data).map((ele) => [ele, nextProps.data[ele]] )
            this.setState({data: data})
        }
        handleNameSort(){
            
            var newState = this.state.data.slice()

            newState.sort((a, b) => {
                if(a[0] < b[0]) return -1 * this.sortingOrderName;
                if(a[0] > b[0]) return 1 * this.sortingOrderName;
                 return 0;
            })
            debugger
            this.sortingOrderName = this.sortingOrderName * -1
            this.setState({data: newState})
        }


        handleAgeSort(){
            var newState = this.state.data.slice()

            newState.sort((a, b) => {
                if(a[1] < b[1]) return -1 * this.sortingOrderAge;
                if(a[1] > b[1]) return 1 * this.sortingOrderAge;
                return 0;
            })
            debugger
            this.sortingOrderAge = this.sortingOrderAge * -1
            this.setState({data: newState})
        }
        render(){
            return (
                <div>
                    <button className="form-control" onClick = {this.handleNameSort.bind(this)}>Sort By Name</button>
                    <button className="form-control" onClick = {this.handleAgeSort.bind(this)}>sort By Age</button>
                    <h1/>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th> <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((ele, i)  => {
                                return <DataRow key = {i} name = {ele[0]} age = {ele[1]} />
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
            var newState = Object.assign({}, this.state, {[name]: age})
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