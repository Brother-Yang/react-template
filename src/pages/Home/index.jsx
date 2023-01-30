import React from 'react'

import { Outlet } from 'react-router-dom'

import styles from './index.less'

const Home = () => {
  return (
    <div className={styles.box}>
      <span className={styles.text}>hello world</span>
      <Outlet />
    </div>
  )
}

export default Home
