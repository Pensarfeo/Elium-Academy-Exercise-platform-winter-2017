var toReactRender = function() {
    class Game extends React.Component {
        constructor(){
            super()
            this.state = {movingBoxes: [1]}
            this.generateRandomMovingBoxes = this.generateRandomMovingBoxes.bind(this)
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
                    {this.state.movingBoxes.map((ele) =>{
                        return(
                            <MovingBox
                                key={ele}
                                removeMe={this.removeElement(ele).bind(this)}
                            />
                        )
                    })}
                </div>
            )
        }
    }

    class MovingBox extends React.Component {
        constructor(){
            super()
            this.state = {}
            this.travelTime = 3
            this.position = 500
            this.updatePosition = this.updatePosition.bind(this)
        }

        updatePosition(){
            if (this.position < -25){
                return this.props.removeMe()
            }
            const step = 500/(10*this.travelTime)
            this.position = this.position - step
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