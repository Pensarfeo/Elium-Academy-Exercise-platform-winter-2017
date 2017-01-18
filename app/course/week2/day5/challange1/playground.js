var toReactRender = function() {
    class Card extends React.Component {
        render(){
            if (this.props.visible) {
                var visibeValue = this.props.value
            } else{
                var visibeValue = "X"
            }
            return <button onClick={this.props.handClick} className= "btn btn-default">{visibeValue}</button>
        }
    }
    class MemoryGame extends React.Component {
        constructor(){
            super()
            this.state = this.initState()
            this.renderCards = this.renderCards.bind(this) 
        }

        handleReset() {
            this.state = this.setState(this.initState())
        }

        handleViewAll() {
            newState = {}
            for(key in this.state) {
                newState[key] = [this.state[key][0], true]
            }

            this.state = this.setState(newState)
        }

        initState(){
            function shuffle(a) {
                for (let i = a.length; i; i--) {
                    let j = Math.floor(Math.random() * i);
                    [a[i - 1], a[j]] = [a[j], a[i - 1]];
                }
            }
            var initArray = [1,2,3,4,1,2,3,4]
            shuffle(initArray)
            var initObj = {}
            initArray.map((ele, i) => {
                initObj[i] = [ele, false]
            })
            return initObj
        }

        registerClick(val){
            var self = this
            return (event) => {
                var last = this.state[this.last]
                var newValue = this.state[val][0]
                if (last && last[0] == newValue) {
                    self.setState( Object.assign({}, self.state, {[val]: [newValue, true]}) )
                    delete self.last
                } else if (!self.last) {
                    self.last = val
                    self.setState( Object.assign({}, self.state, {[val]: [newValue, true]}) )
                } else {
                    self.setState( Object.assign({}, self.state, {[val]: [newValue, true]}) ,function(){
                        setTimeout(
                            () => {
                                self.setState( Object.assign({}, self.state, {[val]: [newValue, false], [self.last]: [this.state[this.last][0], false]  }))
                                delete self.last
                            }, 400
                        )
                    })
                }
            }
        }
        renderCards(){
            var self = this
            return Object.keys(this.state).map((ele) => {
                return <Card value = {self.state[ele][0]}
                             key = {ele}
                             visible = {self.state[ele][1]}
                             handClick = {self.registerClick(ele).bind(self)}
                        />
            })
        }
        renderCardsShow(){
            var self = this
            return Object.keys(this.state).map((ele) => {
                return <button key={ele}> {ele} - {self.state[ele][0]}</button>
            })
        }
        render() {
            return (
                <div>
                    {this.renderCards()}
                    <div style = {{marginTop: "5px"}}>
                        <button onClick={this.handleReset.bind(this)} className= "btn btn-default">Reset</button>
                        <button onClick={this.handleViewAll.bind(this)} className= "btn btn-default">View All</button>
                    </div>
                    {this.renderCardsShow.bind(this)}
                </div>
            )
        }
    }
    reactRender = ReactDOM.render(<MemoryGame data={window.myClass || {}}/>, document.getElementById("tryMe"))
}

toReactRender()