First we will see an example where the profile component controls a Detail component that get's the type and value passed as key. We use should component update on the profile to rerender only if the last letter of the name is "!". We will see the difference between controlled and uncontrolled inputs (default value).
We will then shift the responsibility for the rerender to the Detail component; At this point we can both controll the component; keep track of the state and only update the detail when the right condition is met.

```jsx
        class Detail extends React.Component {
            render() {
                return <div> {this.props.type}: {this.props.value} </div>
            }

            componentWillReceiveProps(nextProps){
                console.log(nextProps)
            }

            shouldComponentUpdate(nextProps, nextState){
                const last = nextProps.value.slice(-1)[0]
                return last === "!"
            }

        } 

        class Profile extends React.Component {
            constructor(props){ // {details: {name: "pedro"}}
                super()
                const detailType = Object.keys(props.details)[0]
                const detailValue = props.details[detailType]
                this.state = {type: detailType, value: detailValue}
            }

            handleChange(event){
                this.setState({value: event.target.value})
            }

            render() {
                return (
                    <div>
                        <Detail type = {this.state.type} value = {this.state.value}/>
                        <input type="text" onChange = {this.handleChange.bind(this)} value = {this.state.value}/>
                    </div>
                )
            }
        }

        ReactDOM.render(
            <Profile details = {{name: "pedro"}}/>,
            document.getElementById('app')
        )
```