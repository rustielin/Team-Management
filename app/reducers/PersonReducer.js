import { combineReducers, createStore } from 'react-redux';

const PersonReducer = (state={items: []}, action) => {
    switch(action.type) {
        case "UPDATE_PERSON": {
            state = {...state, items: action.payload}
        }
        case "ADD_PERSON": {
            state = {...state, items: action.payload}
            break;
        }
        case "DELETE_PERSON": {
            state = {...state, items: action.payload}
            break;
        }
    }
    return state;
}

module.exports = PersonReducer

// firstName: PropTypes.string.isRequired,
// lastName: PropTypes.string.isRequired,
// email: PropTypes.string.isRequired,
// phoneNumber: PropTypes.string.isRequired,
// isAdmin: PropTypes.bool.isRequired
