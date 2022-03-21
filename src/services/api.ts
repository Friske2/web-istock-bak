import api from '../utils/api'
export function getMockApi() {
  return api.get("/a3ad2da0-5317-4531-9b4e-b3326beb7b3f").then((res)=> res.data)
}