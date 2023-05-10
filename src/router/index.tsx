import React from 'react'

import { Navigate } from 'react-router-dom'

import Error from '@/pages/Error'
import SystemFormItemGridLayoutDemo from '@/pages/SystemFormItemGridLayoutDemo'
import RdeuxToolkitDemo from '../pages/RdeuxToolkitDemo'
import DictDemo from '../pages/DictDemo'

const routes = [
  {
    path: '/',
    index: true,
    element: <Navigate to="rdeuxToolkitDemo" />,
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
    path: 'dictDemo',
    element: <DictDemo />,
  },
  {
    path: '*',
    element: <Error />,
  },
]

export default routes
