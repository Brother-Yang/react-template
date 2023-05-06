import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import { Provider } from 'react-redux'
// 适配
// import 'amfe-flexible/index.js'
import './index.less'

import DictConfig from '@/config/dict/dict.config'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

DictConfig()

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
)
