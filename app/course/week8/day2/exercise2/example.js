var toReactRender = function() {
    class Name extends React.Component{
        constructor(){
            super()
        }
        render(){
            return <div>Name: Pedro</div>
        }
    }

    class Email extends React.Component{
        constructor(){
            super()
        }
        render(){
            return <div>Email: Pedro@pedro.pedro</div>
        }
    }

    class Address extends React.Component{
        constructor(){
            super()
        }
        render(){
            return <div>Address: PedroStraat 21, 3000 Pedroland</div>
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
            <Name/>
            <Email/>
            <Address/>
        </Profile>,
        document.getElementById("tryMe")
    )
}

toReactRender()