var toReactRender = function() {
    class Detail extends React.Component{
        constructor(){
            super()
        }
        render(){
            const key = Object.keys(this.props.detail)
            const value = this.props.detail[key]
            return (<div>{key}: {value}</div>)
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