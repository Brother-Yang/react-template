import React from 'react'

import { useLocation } from 'react-router-dom'

const Page = () => {
  const location = useLocation()

  return <div>路径 {location.pathname}</div>
}

export default Page
