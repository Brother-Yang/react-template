import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

// 官网的例子
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
