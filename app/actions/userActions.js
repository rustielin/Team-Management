
import * as types from '../types'

export const updatePerson = (index, item) => {
    return {
        type: types.UPDATE_PERSON,
        // insert between slices
        // payload: [
        //     ...items.slice(0, index),
        //     items[index] + 1,
        //     ...items.slice(index + 1)
        // ]

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
        // get the items before and after
        payload: index
    }
}
