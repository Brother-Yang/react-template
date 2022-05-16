import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const go = () => {
    navigate('/demo')
  }
  return (
    <div>
      我是home页
      <div onClick={go}>点击</div>
      <Outlet />
    </div>
  )
}

export default Home
