import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import intl from 'react-intl-universal'
import { ConfigProvider } from 'antd'
// import enUS_Ant from 'antd/es/locale/en_US'
import zhCN_Ant from 'antd/es/locale/zh_CN'

// 适配
// import 'amfe-flexible/index.js'

import { store } from './store'
import DictConfig from '@/config/dict/dict.config'
import App from './App'

import enUS from '@/locales/en_Us.json'
import zhCN from '@/locales/zh_CN.json'

import './index.less'

DictConfig()

const locales = {
  'en-US': enUS,
  'zh-CN': zhCN,
}

intl.init({ currentLocale: 'zh-CN', locales })

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ConfigProvider locale={zhCN_Ant}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </BrowserRouter>
  // </React.StrictMode>
)
