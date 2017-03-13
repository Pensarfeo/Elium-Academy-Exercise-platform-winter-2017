
// const DisplayTranslatables = function (props) {
//         return (
//             <div>
//                 {props.tranlatables.map( (ele, i) =>{
//                     if (! ele) return <div key = {i}/>
//                     return (
//                         <div key = {i}>
//                             {ele}
//                             <button className = "btn" onClick = {props.deleteTranslatable(i)}> Delete </button>
//                         </div>
//                     ) 
//                 })} 
//             </div>
//         )
// }

var toReactRender = function() {

    const addTranslatable = (translatable) => ({type: "ADD_TRANSLATABLE", translatable})
    const removeTranslatable = (id) => ({type: "REMOVE_TRANSLATABLE", id})
    const updateTranslatable = (id, translatable) => ({type: "UPDATE_TRANSLATABLE", id, translatable})

    const translatables = function (state = [], action) {
        console.log(action)
        switch (action.type) {
            case 'ADD_TRANSLATABLE':
                return state.concat({id: state.length, translatable: action.translatable })
            case 'UPDATE_TRANSLATABLE':
                var newState = [...state]
                newState[action.id] = Object.assign({}, newState[action.id])
                newState[action.id].translatable = action.translatable
                return newState
            case 'REMOVE_TRANSLATABLE':
                var newState = [...state]
                delete newState[action.id]
                return newState
            default:
                return state
        }
    }

    const addTranslation = (translatableId, ...tools) => ({type: "ADD_TRANSLATION", translatableId, tools})
    const removeTranslation = (id) => ({type: "REMOVE_TRANSLATION", id})
    const updateTranslation = (id, tool) => ({type: "UPDATE_TRANSLATION", id, tool})

    const tools = function (state = [], action) {
        switch (action.type) {
            case 'ADD_TRANSLATION':
                var newState = [...state]
                for ( let aTranslation of [].concat(action.tools)){
                    newState.push({id: newState.length, translatableId: action.translatableId, tool: aTranslation })
                }
                return newState
            case 'UPDATE_TRANSLATION':
                var newState = [...state]
                newState[action.id] = Object.assign({}, newState[action.id])
                newState[action.id].tool = action.tool 
                return newState
            case 'REMOVE_TRANSLATION':
                var newState = [...state]
                delete newState[action.id]
                return newState
            default:
                return state
        }
    }

    // Create Store 
    const storeReducer = Redux.combineReducers({translatables, translations})
    const store = Redux.createStore(storeReducer)

    class Translator extends React.Component {
        constructor () {
            super()
            this.state = {tranlatables: ["delete"]}
        }
        handleChange (event) {
            this.setState({tempValue: event.target.value})
        }
        handleSubmit (event) {
            event.preventDefault()
            store.dispatch( this.state.tempValue )
        }
        handleTranslatableDelete (i) {
            const self = this
            return () => {
                const newTrans = [...self.state.tranlatables]
                delete newTrans[i]
                self.setState({tranlatables: newTrans})
            }
        }
        render() {
            return(
                <div>
                    <form className="form-group" onSubmit={this.handleSubmit.bind(this)}>
                        <label for="fullname">New sentence to Translate: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="fullname"
                            style={{width: "200px", margin: "0 5px", display: "inline-block"}}
                            value = {this.state.tempValue}
                            onChange = {this.handleChange.bind(this)}
                        />
                        <input type = "submit" className="btn btn-default" value="Send" />
                    </form>
                    <DisplayTranslatables
                        tranlatables={this.state.tranlatables}
                        deleteTranslatable = {this.handleTranslatableDelete.bind(this)}/>
                </div>
            )
        }
    }

    reactRender = ReactDOM.render(<Translator/>, document.getElementById("tryMe"))
    store.subscribe(reactRender)
}

toReactRender()