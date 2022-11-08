import React from 'react'

import { Outlet } from 'react-router-dom'

import SystemHeader from '@/components/SystemHeader'

import styles from './index.less'

const App = () => {
  return (
    <div className={styles.App}>
      <div className={styles.SideMenu} id="SideMenu" />
      <div className={styles.Main}>
        <div className={styles.Header}>
          <SystemHeader />
        </div>
        <div className={styles.Content}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
export default App
