import { combineReducers, createStore } from 'react-redux';

const PersonListReducer = (state=[], action) => {
    switch(action.type) {
        case "ADD_PERSON": {
            state = {...state, items: action.payload}
            break;
        }
        case "DELETE_PERSON": {
            state = {...state, items: action.payload}
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

module.exports = PersonListReducer

// TOOD: proptypes later and also refactor items / people
// PersonList.propTypes = {
//     people: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         isAdmin: PropTypes.bool.isRequired,
//         text: PropTypes.string.isRequired
//     }).isRequired).isRequired,
//     onPersonClick: PropTypes.func.isRequired
// }
