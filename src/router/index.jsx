import React from 'react'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Demo from '@/pages/Demo'

const routes = [
  // 这样配置，在地址栏输入路由找不到页面
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'demo',
        element: <Demo />,
      },
    ],
  },
  {
    path: 'about',
    element: <About />,
  },
]
export default routes
