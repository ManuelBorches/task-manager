import { ADD_TASK, DELETE_TASK, EDIT_TASK_NAME, EDIT_TASK_STATUS } from '../constants'

const initialState = {
    tasks: []
}

export default function taskReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TASK:
            return { ...state, tasks: [action.payload, ...state.tasks] }
        case DELETE_TASK:
            return { ...state, tasks: state.tasks.filter((el, index) => index !== action.payload) }
        case EDIT_TASK_NAME:
            return { ...state, tasks: state.tasks.map((el, index) => index === action.payload.index ? {...el, name: action.payload.name} : el) }
        case EDIT_TASK_STATUS:
            return { ...state, tasks: state.tasks.map((el, index) => index === action.payload.index ? {...el, status: action.payload.status} : el) }
        default:
            return state
    }
} 

// delete: action.payload = index

// edit_task_name : action.payload = {index: x, name: ''}

// edit_task_status: action.payload = {index: x, status: ''}