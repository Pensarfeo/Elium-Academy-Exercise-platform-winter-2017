var toReactRender = function() {

    class Game extends React.Component {
        constructor(){
            super()
            this.state = {movingBoxes: [1]}
            this.jump = this.jump.bind(this)
        }

        jump(){
            this.setState({jump: true}, ()=>this.setState({jump: false}))
        }

        render(){
            return(
                <div className = {"game"} onClick={this.jump}>
                    <JumpingBox jump={this.state.jump} broadcastPosition = {this.broadcastPosition}/>
                </div>
            )
        }
    }

    class JumpingBox extends React.Component {
        constructor(){
            super()
            this.jump = this.jump.bind(this)
            this.state={}
        }

        jump(){
            let i = 0
            let bottom
            this.setState({style: {bottom: 0}, jumping: true})
            const maxTime = 1000 
            const steps = 100 
            while(i<=steps){
                (function(t){
                    setTimeout(() => {
                        const bottom = Math.sin((Math.PI/steps)*t)*100
                        this.setState({style: {bottom: bottom}})
                    },
                    (t/steps)*maxTime)
                }.bind(this))(i)
                i++
            }
            setTimeout(() => {this.setState({style: {bottom: 0}, jumping: false})}, 1000)
        }

        componentWillReceiveProps(nextProps){
            if(nextProps.jump && nextProps.jump !== !!(this.state.jumping)) {
                this.jump()
            }
        }

        shouldComponentUpdate(nextProps, nextState) {
            return this.state.jumping || true
        }


        render() {
            return (<div className="jumping-box" style={this.state.style || {}}></div>)
        }
    }

    ReactDOM.render(<Game/>, document.getElementById("tryMe"))
}

toReactRender()