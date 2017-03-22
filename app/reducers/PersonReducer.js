
import * as types from '../types'
const initialState = [
        {
            firstName: 'Rustie',
            lastName: 'Lin',
            email: 'rustielin@berkeley.edu',
            phoneNumber: '510-676-0295',
            isAdmin: true
        },
        {
            firstName: 'Frank',
            lastName: 'Smith',
            email: 'fs@yahoo.com',
            phoneNumber: '408-111-3321',
            isAdmin: true
        },
        {
            firstName: 'Joe',
            lastName: 'Ramsay',
            email: 'joerrr@hotmail.com',
            phoneNumber: '408-394-3321',
            isAdmin: true
        },
]

const PersonReducer = (state=initialState, action) => {
    switch(action.type) {

        case types.ADD_PERSON: {
            state = [
                ...state,
                action.payload
            ]
            break;
        }
        case types.DELETE_PERSON: {

            state = [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ]

            break;
        }
        case types.UPDATE_PERSON: {
            state = [
                ...state.slice(0, action.payload.index),
                (action.payload.item),
                ...state.slice(action.payload.index+1)
            ]
            break;
        }
    }
    return state;
}

export default PersonReducer
