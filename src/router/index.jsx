import React from 'react'

import { Navigate } from 'react-router-dom'

import Home from '@/pages/Home'
import Error from '@/pages/Error'
import Page from '@/pages/Page'
import App from '@/pages/App'
import About from '@/pages/About'
import BasicLayout from '@/components/BasicLayout'
import Demo from '../pages/Demo'

const routes = [
  {
    path: '/',
    id: 'root',
    name: '根',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="home" />,
      },
      {
        name: '首页',
        id: 'home',
        path: 'home',
        element: <Home />,
      },
      {
        name: '页面1',
        id: 'page',
        path: 'page',
        element: <BasicLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="page1-1" />,
          },
          {
            name: '页面1-1',
            id: 'page1-1',
            path: 'page1-1',
            element: <Page />,
          },
          {
            name: '页面1-2',
            id: 'page1-2',
            path: 'page1-2',
            children: [
              { name: '页面1-2-1', id: 'page1-2-1', path: 'page1-2-1', element: <Page /> },
              { name: '页面1-2-2', id: 'page1-2-2', path: 'page1-2-2', element: <Page /> },
            ],
          },
        ],
      },
      {
        name: '页面2',
        id: 'page2',
        path: 'page2',
        element: <BasicLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="page2-1" />,
          },
          {
            name: '页面2-1',
            id: 'page2-1',
            path: 'page2-1',
            element: <Page />,
          },
        ],
      },
      {
        name: '页面3',
        id: 'page3',
        path: 'page3',
        element: <Page />,
      },
    ],
  },
  {
    path: 'about',
    id: 'about',
    name: '关于',
    element: <About />,
  },
  {
    path: 'demo',
    id: 'demo',
    name: '关于',
    element: <Demo />,
  },
  {
    id: '*',
    path: '*',
    element: <Error />,
  },
]

export default routes
