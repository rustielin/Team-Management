import { combineReducers } from 'redux'
import PersonListReducer from './PersonListReducer'
import PersonReducer from './PersonReducer'


// Combines all the reducers from the reducers directory
const reducer = combineReducers({
    PersonReducer
})

export default reducer
