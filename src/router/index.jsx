import React from 'react'

import { Navigate } from 'react-router-dom'

import Error from '@/pages/Error'
import SystemFormItemGridLayoutDemo from '@/pages/SystemFormItemGridLayoutDemo'
import RdeuxToolkitDemo from '../pages/RdeuxToolkitDemo'

const routes = [
  {
    path: '/',
    index: true,
    element: <Navigate to="systemFormItemGridLayoutDemo" />,
  },
  {
    path: 'systemFormItemGridLayoutDemo',
    element: <SystemFormItemGridLayoutDemo />,
  },
  {
    path: 'rdeuxToolkitDemo',
    element: <RdeuxToolkitDemo />,
  },
  {
    path: '*',
    element: <Error />,
  },
]

export default routes
