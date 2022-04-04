import * as types from './../constants/ActionTypes'

export const listAll = () => {
    return {
        type: types.LIST_ALL,
    }
}

export const saveTask = (task) => {
    return {
        type: types.SAVE_TASK,
        task,
    }
}

export const openForm = () => {
    return {
        type: types.OPEN_FORM,
    }
}

export const closeForm = () => {
    return {
        type: types.CLOSE_FORM,
    }
}

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM,
    }
}

export const changeStatus = (id) => {
    return {
        type: types.CHANGE_STATUS,
        id,
    }
}

export const deleteTask = (id) => {
    return {
        type: types.DELETE_TASK,
        id,
    }
}

export const editTask = (task) => {
    return {
        type: types.EDIT_TASK,
        task,
    }
}

export const editThenAdd = () => {
    return {
        type: types.EDIT_THEN_ADD,
    }
}