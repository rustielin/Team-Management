
import * as types from '../types'

export const updatePerson = (index, item) => {
    return {
        type: types.UPDATE_PERSON,
        payload: {
            index: parseInt(index), // is there a better way of doing this?
            item: item
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
        payload: parseInt(index)
    }
}
