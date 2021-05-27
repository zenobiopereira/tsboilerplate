import axios from 'axios'

import { API_URL } from '../constants'

const Api = axios.create({ baseURL: API_URL })

export default Api
