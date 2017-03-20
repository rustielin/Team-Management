import { combineReducers, createStore } from "redux";

const userReducer = (state={}, action) => {
    switch(action.type) {
        case "CHANGE_FIRSTNAME": {
            state = {...state, firstName: action.payload}
            break;
        }
        case "CHANGE_LASTNAME": {
            state = {...state, lastName: action.payload}
            break;
        }
        case "CHANGE_EMAIL": {
            state = {...state, email: action.payload}
            break;
        }
        case "CHANGE_PHONE_NUMBER": {
            state = {...state, phoneNumber: action.payload}
            break;
        }
        case "CHANGE_IS_ADMIN": {
            state = {...state, isAdmin: action.payload}
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
