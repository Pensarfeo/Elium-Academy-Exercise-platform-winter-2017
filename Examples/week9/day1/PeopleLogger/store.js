import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import axios from 'axios'

const addPerson = (person) => ({type: "ADD_PERSON", person})


const addPeople = (data) => {
    return (dispatch) => {
        for(let person of data){
            dispatch(addPerson(person))
        }
    }
}

const getPeopleAsync = (cb) => {
    return dispatch => {
        axios.get('http://localhost:3000/people')
          .then(function (response) {
                dispatch(addPeople(response.data))
                cb(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    };
}

export {addPerson, getPeopleAsync}

const persons = function(state = [], action){
    console.log(action)
    switch(action.type) {
        case "ADD_PERSON":
            return state.concat(action.person)
        default:
            return state
    }
}

const store = createStore(combineReducers({persons}), applyMiddleware(thunk))

export default store
