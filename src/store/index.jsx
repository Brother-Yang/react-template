import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

import { createLogger } from 'redux-logger'

const logger = createLogger()

const myLog = (store) => (next) => (action) => {
  console.log(store, 'store1111')
  console.log(next, 'next111')
  console.log(action, 'action111')
  return next(action)
}
// 官网的例子
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => {
    console.log(getDefaultMiddleware(), 'getDefaultMiddleware')
    return getDefaultMiddleware().concat(logger, myLog)
  },
})

console.log(store.getState(), 'store')
