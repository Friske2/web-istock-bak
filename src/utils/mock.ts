import axios from 'axios'

const mock = axios.create({
  baseURL: `${process.env.REACT_APP_API_MOCK}/v3`
})

export default mock