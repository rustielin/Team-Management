
const initialState = [
        {
            key: 0,
            firstName: 'Rustie',
            lastName: 'lin',
            email: 'rustieli@berkeley.edu',
            phoneNumber: '510-676-0295',
            isAdmin: true
        },
        {
            key: 1,
            firstName: 'Frank',
            lastName: 'lin',
            email: 'rustieli@berkeley.edu',
            phoneNumber: '510-676-0295',
            isAdmin: true
        },
        {
            key: 2,
            firstName: 'BOOBOBOBOBO',
            lastName: 'lin',
            email: 'rustieli@berkeley.edu',
            phoneNumber: '510-676-0295',
            isAdmin: false
        }

]

const PersonReducer = (state=initialState, action) => {
    switch(action.type) {
        // ../types.UPDATE_PERSON?
        case "UPDATE_PERSON": {
            return [
                ...state.slice(0, action.payload.index),
                (action.payload.item),
                ...state.slice(action.payload.index+1)
            ]
            alert(action.payload.index);

            break;
        }
        case "ADD_PERSON": {
            return [
                ...state,
                action.payload
            ]
            break;
        }
        case "DELETE_PERSON": {
            return [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ]
            break;
        }
    }
    return state;
}

export default PersonReducer
