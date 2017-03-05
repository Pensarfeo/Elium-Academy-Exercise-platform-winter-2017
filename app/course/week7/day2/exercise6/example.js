var toReactRender = function() {
    class ShowList extends React.Component{
        constructor(props){
            super()
            this.handleHover = this.handleHover.bind(this)
            this.state = {list: props.list}
        }

        handleHover(event) {
            const newList = this.state.list.filter((ele) => ele != event.target.innerText )
            this.setState({list: newList})
        }

        render(){
            return(
                <div>
                {this.state.list.map((val) =>
                    (
                        <li key={val} onMouseEnter={this.handleHover}>{val}</li>
                    )
                )}
                </div>
            )
        }
    }

    reactRender = ReactDOM.render(<ShowList list ={[1,2,3,4]}/>, document.getElementById("tryMe"))
}

toReactRender()