
import * as types from '../types'

export const updatePerson = (index, item, items) => {
    return {
        type: types.UPDATE_PERSON,
        // insert between slices
        payload: [
            ...items.slice(0, index),
            items[index] + 1,
            ...items.slice(index + 1)
        ]
    }

}

export const addPerson = (item, items) => {
    return {
        type: types.ADD_PERSON,
        payload: [...items, item]
    }
}

export const deletePerson = (index, items) => {
    return {
        type: types.DELETE_PERSON,
        // get the items before and after
        payload: [
            ...items.slice(0, index),
            ...items.slice(index + 1)
        ]
    }
}
