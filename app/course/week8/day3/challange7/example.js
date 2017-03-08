var toReactRender = function() {
    class Game extends React.Component {
        constructor(){
            super()
            this.state = {movingBoxes: [1], score: 1}
            this.jump = this.jump.bind(this)
            this.generateRandomMovingBoxes = this.generateRandomMovingBoxes.bind(this)
            this.broadcastPosition = this.broadcastPosition.bind(this)
            this.addPoint = this.addPoint.bind(this)
        }

        jump(){
            this.setState({jump: true}, ()=>this.setState({jump: false}))
        }

        removeElement(reference){
            var self = this
            return () => {

                let newBoxes = this.state.movingBoxes.filter((ele)=>{
                    return ele !== reference
                } )
                this.setState({movingBoxes: newBoxes})
            }
        }

        addPoint(p){
            this.setState({score: this.state.score + p})
        }

        broadcastPosition(position){
            if(position) {
                this.jboxPosition = position
            }
            return this.jboxPosition || 0
        }

        generateRandomMovingBoxes(){
            const lastId = this.state.movingBoxes.slice(-1)[0]+1

            const randomTimeout = Math.random() * 2000
            this.setState(
                {movingBoxes: this.state.movingBoxes.concat(lastId)},
                () => {setTimeout(this.generateRandomMovingBoxes, 1000 + randomTimeout )}
            )
        }

        componentDidMount(){
            this.generateRandomMovingBoxes()
        }

        render(){
            return(
                <div className = {"game"} onClick={this.jump}>
                    <div>score: {this.state.score}</div>
                    <JumpingBox jump={this.state.jump} broadcastPosition = {this.broadcastPosition}/>
                    {this.state.movingBoxes.map((ele) =>{
                        return <MovingBox
                            key={ele}removeMe={this.removeElement(ele).bind(this)}
                            jbPosition = {this.broadcastPosition}
                            addPoint={this.addPoint}
                            />
                    })}
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
                        this.props.broadcastPosition(bottom)
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

    class MovingBox extends React.Component {
        constructor(){
            super()
            this.state = {}
            this.travelTime = 3
            this.position = 500
            this.updatePosition = this.updatePosition.bind(this)
            this.hit = false
            this.safe = false
        }

        checkhit(jPosition, mPosition ){
            const hit = (mPosition - (250 + 25)) < 0 &&  ( mPosition + 25 - 250) > 0 && jPosition < 25;
            if (hit && !this.hit){
                this.hit = true
                this.props.addPoint(-1)
            }
            if(!this.hit && !this.safe && (mPosition + 25 - 250) < 0) {
                this.safe = true
                this.props.addPoint(1)
            }

        }

        updatePosition(){
            if (this.position< -25){
                return this.props.removeMe()
            }
            const jPosition = this.props.jbPosition()
            const step = 500/(10*this.travelTime)
            this.position = this.position - step
            this.checkhit(jPosition, this.position)
            this.setState({left: this.position}, () => {setTimeout(this.updatePosition, 100)})
        }


        componentDidMount(){
            this.updatePosition()
        }

        render() {
            return (<div className="moving-box" style={this.state || {}}></div>)
        }
    }
    reactRender = ReactDOM.render(<Game/>, document.getElementById("tryMe"))
}

toReactRender()