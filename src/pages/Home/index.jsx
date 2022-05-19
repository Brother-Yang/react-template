import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import './index.less'

const Home = () => {
  const navigate = useNavigate()
  const go = () => {
    navigate('/demo')
  }
  return (
    <div className="box">
      我是home页
      <div onClick={go} className="text">
        点击
      </div>
      <Outlet />
    </div>
  )
}

export default Home
