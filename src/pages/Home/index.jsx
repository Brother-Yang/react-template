import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import styles from './index.less'
import { Button } from 'antd'

const Home = () => {
  const navigate = useNavigate()
  const go = () => {
    navigate('/demo')
  }
  return (
    <div className={styles.box}>
      我是home页
      <Button onClick={go}>点击</Button>
      <Outlet />
    </div>
  )
}

export default Home
