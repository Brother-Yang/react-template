import React from 'react'

import { Navigate } from 'react-router-dom'

import Home from '@/pages/Home'
import Error from '@/pages/Error'
import App from '@/pages/App'
import About from '@/pages/About'
import RdeuxToolkitDemo from '../pages/RdeuxToolkitDemo'

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="home" />,
      },
      {
        path: 'home',
        element: <Home />,
      },
    ],
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'demo',
    name: 'RdeuxToolkitDemo',
    element: <RdeuxToolkitDemo />,
  },
  {
    path: '*',
    element: <Error />,
  },
]

export default routes
