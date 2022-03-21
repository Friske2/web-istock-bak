import { configureStore } from '@reduxjs/toolkit'
import counterSlice  from './CouterSlice'
const store = configureStore({
  reducer: {
    counter: counterSlice
  }
})

export default store