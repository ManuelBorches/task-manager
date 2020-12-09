import { ADD_TASK, EDIT_TASK_NAME, DELETE_TASK, EDIT_TASK_STATUS } from '../constants'

export const addTask = (data) => ({  type: ADD_TASK, payload: data })

export const editTask = (data) => ({ type: EDIT_TASK_NAME, payload: data })

export const editTaskStatus = (data) => ({ type: EDIT_TASK_STATUS, payload: data })

export const deleteTask = (data) => ({ type: DELETE_TASK, payload: data })
