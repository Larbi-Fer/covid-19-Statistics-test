import { combineReducers } from 'redux'
import { GET_ALL } from '../actions/types'

const redusers = (data = [], action) => {
    switch (action.type) {
        case GET_ALL:
            return action.payload

        default:
            return data
    }
}
export default redusers