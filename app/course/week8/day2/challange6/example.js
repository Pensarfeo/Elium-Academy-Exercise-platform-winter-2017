var toReactRender = function() {

    const addTranslatable = (translatable) => ({type: "ADD_TRANSLATABLE", translatable})
    const removeTranslatable = (id) => ({type: "REMOVE_TRANSLATABLE", id})
    const updateTranslatable = (id, translatable) => ({type: "UPDATE_TRANSLATABLE", id, translatable})

    const translatables = function (state = [], action) {
        switch (action.type) {
            case 'ADD_TRANSLATABLE':
                return state.concat({id: state.length, translatable: action.translatable })
            case 'UPDATE_TRANSLATABLE':
                if (!state[action.id]) return state
                var newState = [...state]
                newState[action.id] = Object.assign({}, newState[action.id], {translatable: action.translatable})
                return newState
            case 'REMOVE_TRANSLATABLE':
                if (!state[action.id]) return state
                var newState = [...state]
                delete newState[action.id]
                return newState
            default:
                return state
        }
    }

    const addTranslation = (translatableId, language, translation) => ({type: "ADD_TRANSLATION", translatableId, translation, language})
    const removeTranslation = (id) => ({type: "REMOVE_TRANSLATION", id})
    const updateTranslation = (id, translation) => ({type: "UPDATE_TRANSLATION", id, translation})

    const translations = function (state = [], action) {
        switch (action.type) {
            case 'REMOVE_TRANSLATABLE':
                state.map((ele)=> {
                    if (!ele || ele.translatableId === action.id) return
                    else return ele
                })
            case 'ADD_TRANSLATION':
                return state.concat({id: state.length, translatableId: action.translatableId, translation: action.translation, language: action.language })
            case 'UPDATE_TRANSLATION':
                if (!state[action.id]) return state
                var newState = [...state]
                newState[action.id] = Object.assign({}, newState[action.id])
                newState[action.id].translation = action.translation 
                return newState
            case 'REMOVE_TRANSLATION':
                if (!state[action.id]) return state
                var newState = [...state]
                delete newState[action.id]
                return newState
            default:
                return state
        }
    }

    // Create Store 
    const storeReducer = Redux.combineReducers({translatables, translations})
    const store = Redux.createStore(storeReducer, {
        translatables: [{id: 0, translatable: "asdf"}, {id: 1, translatable: "qwer"}],
        translations: [
            {id: 0, translatableId: 0, language: "asdfe", translation: "gsfg"},
            {id: 1, translatableId: 1, language: "asdfw", translation: "wert"},
            {id: 2, translatableId: 0, language: "wertrr", translation: "xcvb"},
            {id: 3, translatableId: 0, language: "werte", translation: "fghj"},
            {id: 4, translatableId: 1, language: "hkjsdf", translation: "asf"},
            {id: 5, translatableId: 0, language: "werwet", translation: "1234"}]
        })

    // --------------------------------------- React Redux -------------------------------------------//

    const connect = ReactRedux.connect
    const Provider = ReactRedux.Provider
    const bindActionCreators = Redux.bindActionCreators

    // --------------------------------------- Components -------------------------------------------//



    // --------------------------------------- Show Editable li ---------------------------------//
    class EditableInput extends React.Component {
        constructor(props) {
            super()
            this.state = {tempValue: props.value}
        }
        handleChange(event) {
            this.setState({tempValue: event.target.value})
        }
        handleUpdate() {
            this.props.toggleVisibility()
            this.props.dispatchAction(this.props.extraInfo[0], this.state.tempValue)
        }
        handleCancleUpdate() {
            this.props.toggleVisibility()
        }
        render() {
            return (
                <div>
                    <input type = "text" onChange = {this.handleChange.bind(this)} value = {this.state.tempValue} />
                    <button onClick = {this.handleCancleUpdate.bind(this)}>Cancel</button>
                    <button onClick = {this.handleUpdate.bind(this)}>Update</button>
                </div>
            )
        }
    }


    class CrudField extends React.Component {
        constructor(props) {
            super()
            this.state = {tempValue: props.value}
        }
        handleUpdate() {
            this.props.toggleVisibility()
        }
        handleDelete() {
            this.props.dispatchAction(this.props.extraInfo[0])
        }
        render() {
            return (
                <div>
                    <button onClick = {this.handleDelete.bind(this)}>Delete</button>
                    <button onClick = {this.handleUpdate.bind(this)}>Update</button>
                    {this.props.children}
                </div>
            )
        }
    }

    // --------------------------------------- Show Translation --------------------------------------------//

    class UShowTranslation extends React.Component{
        constructor() {
            super()
            this.state = {}
        }
        toogleInputField() {
            this.setState({updating: !this.state.updating} )
        }
        render() {
            return (
                <li>
                    {this.props.children}
                    { this.state.updating ?
                        <EditableInput
                            toggleVisibility = {this.toogleInputField.bind(this)}
                            value = {this.props.value}
                            extraInfo = {this.props.extraInfo}
                            dispatchAction = {this.props.updateTranslation}
                        /> : 
                        <CrudField
                            toggleVisibility = {this.toogleInputField.bind(this)}
                            value = {this.props.value}
                            extraInfo = {this.props.extraInfo}
                            dispatchAction = {this.props.removeTranslation}
                        />
                    }
                </li>
            )
        }
    }

    const ShowTranslation = connect(null, (dispatch) => {return bindActionCreators({updateTranslation, removeTranslation}, dispatch)})(UShowTranslation)

    // --------------------------------------- Show Translations --------------------------------------------//
    class UShowTranslations extends React.Component {
        render() {
            return (
                <ul>
                    {
                        this.props.translations.map((translation) => {
                            if (!translation || translation.translatableId !== this.props.translatableId) return null
                            return(
                                <ShowTranslation
                                    key = {translation.id}
                                    value = {translation.translation}
                                    extraInfo = {[translation.id]}>
                                    {translation.language} => {translation.translation}
                                </ShowTranslation>
                            )
                        })
                    }
                </ul>
            )
        }
    }
    const ShowTranslations = connect((state) => ({translations: state.translations}) )(UShowTranslations)

    // --------------------------------------- Show Translatable --------------------------------------------//
    class AddTranslation extends React.Component {
        constructor(props) {
            super()
            this.state = {}
        }
        handleChange(event) {
            this.setState({[event.target.placeholder]: event.target.value})
        }
        handleAdd() {
            this.props.toggleVisibility()
            this.props.dispatchAction(this.props.extraInfo[0], this.state.language, this.state.translation)
        }
        handleCancleAdd() {
            this.props.toggleVisibility()
        }
        render() {
            if (!this.props.visible) return null
            return (
                <div>
                    <input type = "text" onChange = {this.handleChange.bind(this)} value = {this.state.tempValue} placeholder = "language"  />
                    <input type = "text" onChange = {this.handleChange.bind(this)} value = {this.state.tempValue} placeholder = "translation"/>
                    <button onClick = {this.handleCancleAdd.bind(this)}>Cancel</button>
                    <button onClick = {this.handleAdd.bind(this)}>Add Tranlation</button>
                </div>
            )
        }
    }

    class ToggleTextButton extends React.Component {
        render() {
            if (!this.props.visible) { return null}
            return <button onClick = {this.props.onClick}>{this.props.children}</button>
        }
    } 

    class UShowTranslatable extends React.Component{
        constructor() {
            super()
            this.state = {}
        }
        toogleInputField() {
            this.setState({updating: !this.state.updating} )
        }
        handleAddTranslation() {
            this.setState({addingTranslation: !this.state.addingTranslation})
        }
        render() {
            return (
                <li>
                    {this.props.children}
                    { this.state.updating ?
                        <EditableInput
                            toggleVisibility = {this.toogleInputField.bind(this)}
                            value = {this.props.value}
                            extraInfo = {this.props.extraInfo}
                            dispatchAction = {this.props.updateTranslatable}
                        /> : 
                        <span>
                            <CrudField
                                toggleVisibility = {this.toogleInputField.bind(this)}
                                value = {this.props.value}
                                extraInfo = {this.props.extraInfo}
                                dispatchAction = {this.props.removeTranslatable}
                            >
                                <ToggleTextButton onClick = {this.handleAddTranslation.bind(this)} visible = {!this.state.addingTranslation}>
                                    Add Translation
                                </ToggleTextButton>
                            </CrudField>
                            <AddTranslation
                                visible = {this.state.addingTranslation}
                                value = {""}
                                dispatchAction = {this.props.addTranslation}
                                extraInfo = {this.props.extraInfo}
                                toggleVisibility = {this.handleAddTranslation.bind(this)}
                            />
                        </span>
                    }
                    <ShowTranslations translatableId = {this.props.extraInfo[0]} />
                </li>
            )
        }
    }

    const ShowTranslatable = connect(null, (dispatch) => {return bindActionCreators({updateTranslatable, removeTranslatable, addTranslation}, dispatch)})(UShowTranslatable)

    // --------------------------------------- Show Translatables -------------------------------------------//
    class UShowTranslatables extends React.Component{
        render() {
            return(
                <ul> 
                    {
                        this.props.translatables.map((translatable) => {
                            if (!translatable) return ""
                            return(
                                <ShowTranslatable
                                    key = {translatable.id}
                                    value = {translatable.translatable}
                                    extraInfo = {[translatable.id]}>
                                    {translatable.translatable}
                                </ShowTranslatable>
                            )
                        })
                    }
                </ul>
            )
        }
    }

    const ShowTranslatables = connect((state) => ({translatables: state.translatables}) )(UShowTranslatables)

    // --------------------------------------- Add Translatable -------------------------------------------//
    class UAddTranslatable extends React.Component {
        constructor () {
            super()
            this.state = {tempValue: ""}
        }

        handleChange (event) {
            this.setState({tempValue: event.target.value})
        }

        handleSubmit (event) {
            event.preventDefault()
            this.props.addTranslatable(this.state.tempValue)
            console.log(store.getState())
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
                </div>
            )
        }
    }


    const AddTranslatable = connect(null, (dispatch) => {return Redux.bindActionCreators({addTranslatable}, dispatch)} )(UAddTranslatable)


    reactRender = function() { ReactDOM.render(
        <Provider store = {store}>
            <div>
                <AddTranslatable/>
                <ShowTranslatables/>
            </div>
        </Provider>
        , document.getElementById("tryMe")
    )}
    reactRender()
    store.subscribe(reactRender)
    store.subscribe(()=>{console.log(store.getState())})
}

toReactRender()