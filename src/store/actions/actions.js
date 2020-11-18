import * as api from '../../api'
import { GET_ALL } from './types'

export const getAll = async dispatch => {
    try {
        const { data } = await api.getAll()
        dispatch({ type: GET_ALL, payload: data })
    } catch (error) {
        console.log(error)
    }
}