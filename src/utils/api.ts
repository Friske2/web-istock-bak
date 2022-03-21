import axios from 'axios'

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_MOCK}/v3`
})

export default api