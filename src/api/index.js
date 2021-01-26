import axios from 'axios'
// https://covid19-api.org/api/status
const url = 'http://localhost:5000'

export const getAll = () => axios.get(url)