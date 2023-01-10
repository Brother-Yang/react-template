import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import strReducer from './strSlice'

// 自定义中间件
const myLog = (store) => (next) => (action) => {
  store
  return next(action)
}

// 官网的例子
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    strState: strReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myLog),
})
