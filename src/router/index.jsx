import React from 'react'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Demo from '@/pages/Demo'

const routes = [
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
