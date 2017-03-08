var toReactRender = function() {
    class Detail extends React.Component {
        constructor(props){
            super()
            this.key = Object.keys(props.detail)[0]
            this.state = Object.assign({}, props.detail)
        }


      handleChange(e) {
        this.setState({[this.key]: e.target.parentElement.getElementsByTagName("input")[0].value});
      }

        render(){
            const key = Object.keys(this.state)[0]
            const value = this.state[key]
            return (
                <div>
                    <span>{key}: {value}</span>
                    <div>
                        <input type="text" placeholder={"your"+key} defaultValue={value}/>
                        <button type = "button" onClick={this.handleChange.bind(this)}> Change</button>
                    </div>
                </div>
            )
        }
    }


    class Profile extends React.Component{
        constructor(){
            super()
        }
        render(){
            return <div>{this.props.children}</div>
        }
    }

    reactRender = ReactDOM.render(
        <Profile>
            <Detail detail={{Name: "Pedro"}} />
            <Detail detail={{Email: "pedro@pedro.pedro"}} />
            <Detail detail={{Address: "PedroStraat 21, 3000 Pedroland"}}/>
        </Profile>
        , document.getElementById("tryMe")
    )
}

toReactRender()