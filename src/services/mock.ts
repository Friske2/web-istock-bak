import mock from '../utils/mock'
export function getMockApi() {
  return mock.get("/a3ad2da0-5317-4531-9b4e-b3326beb7b3f").then((res)=> res.data)
}