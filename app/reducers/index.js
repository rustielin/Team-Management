import { combineReducers } from 'redux'
import PersonReducer from './PersonReducer'


// Combines all the reducers from the reducers directory
// calls reducers with slices of state according to keys
const reducer = combineReducers({
    items: PersonReducer
})

export default reducer
