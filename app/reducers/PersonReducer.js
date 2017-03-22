
const initialState = [
        {
            firstName: 'Rustie',
            lastName: 'lin',
            email: 'rustieli@berkeley.edu',
            phoneNumber: '510-676-0295',
            isAdmin: true
        },
        {
            firstName: 'Rustie',
            lastName: 'lin',
            email: 'rustieli@berkeley.edu',
            phoneNumber: '510-676-0295',
            isAdmin: true
        },
        {
            firstName: 'Rustie',
            lastName: 'lin',
            email: 'rustieli@berkeley.edu',
            phoneNumber: '510-676-0295',
            isAdmin: true
        },
        {
            firstName: 'Rustie',
            lastName: 'lin',
            email: 'rustieli@berkeley.edu',
            phoneNumber: '510-676-0295',
            isAdmin: true
        },
        {
            firstName: 'Rustie',
            lastName: 'lin',
            email: 'rustieli@berkeley.edu',
            phoneNumber: '510-676-0295',
            isAdmin: true
        },
        {
            firstName: 'Rustie',
            lastName: 'lin',
            email: 'rustieli@berkeley.edu',
            phoneNumber: '510-676-0295',
            isAdmin: true
        },
        {
            firstName: 'Rustie',
            lastName: 'lin',
            email: 'rustieli@berkeley.edu',
            phoneNumber: '510-676-0295',
            isAdmin: true
        },
        {
            firstName: 'Rustie',
            lastName: 'lin',
            email: 'rustieli@berkeley.edu',
            phoneNumber: '510-676-0295',
            isAdmin: true
        },
        {
            firstName: 'Rustie',
            lastName: 'lin',
            email: 'rustieli@berkeley.edu',
            phoneNumber: '510-676-0295',
            isAdmin: true
        },
        {
            firstName: 'Rustie',
            lastName: 'lin',
            email: 'rustieli@berkeley.edu',
            phoneNumber: '510-676-0295',
            isAdmin: true
        },
        {
            firstName: 'Rustie',
            lastName: 'lin',
            email: 'rustieli@berkeley.edu',
            phoneNumber: '510-676-0295',
            isAdmin: true
        },
]

const PersonReducer = (state=initialState, action) => {
    switch(action.type) {
        // ../types.UPDATE_PERSON?
        case "UPDATE_PERSON": {
            state = [
                ...state.slice(0, action.payload.index),
                action.payload.item,
                ...state.slice(action.payload.index + 1, 100000)
            ]
            break;
        }
        case "ADD_PERSON": {
            state = [
                ...state,
                action.payload
            ]
            break;
        }
        case "DELETE_PERSON": {
            state = [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ]
            break;
        }
    }
    return state;
}

export default PersonReducer
