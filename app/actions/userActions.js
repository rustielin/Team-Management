
import * as types from '../types'

export const updatePerson = (index, item) => {
    return {
        type: types.UPDATE_PERSON,
        payload: {
            index,
            item
        }
    }

}

export const addPerson = (item) => {
    return {
        type: types.ADD_PERSON,
        payload: item
    }
}

export const deletePerson = (index) => {
    return {
        type: types.DELETE_PERSON,
        payload: index
    }
}
