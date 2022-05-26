import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import styles from './index.less'

const Home = () => {
  const navigate = useNavigate()
  const go = () => {
    navigate('/demo')
  }
  return (
    <div className={styles.box}>
      我是home页
      <div onClick={go} className={styles.text}>
        点击
      </div>
      <Outlet />
    </div>
  )
}

export default Home
