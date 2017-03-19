// reducers!!!
// 

function lastProfile(state) {
    return state.slice(-1)[0] || {id: 0}
}

function withId(state, data) {
    state.profiles.filter( ele => ele.id === data.id)
}


const Profiles = {
    create: function (state, data) {
        return [ ...state, data ]
    },
    init: function(state, data){
        return data
    },
    edit: function (state, data) {
        debugger
        return state.map( ele => ele._id == data._id ? data : ele)
    },
    delete: function (state, data){
        return state.filter( ele => ele._id !== data._id)
    },
    fetch: function (state, data){
        return state.concat(...data)
    },
    default: function (state, data){
        return state
    }
}


const profiles = (state = [], action) => {
    const type = action.type.split("_").slice(-1)[0]
    return (Profiles[type] || Profiles["default"])(state, action.data)
}


export default profiles