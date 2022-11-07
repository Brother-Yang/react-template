import React from 'react'

import { useRoutes } from 'react-router-dom'
import router from '@/router'

import SystemHeader from '@/components/SystemHeader'

import styles from './index.less'

const App = () => {
  const element = useRoutes(router)
  return (
    <div className={styles.App}>
      <div className={styles.SideMenu} id="SideMenu" />
      <div className={styles.Main}>
        <div className={styles.Header}>
          <SystemHeader />
        </div>
        <div className={styles.Content}>{element}</div>
      </div>
    </div>
  )
}
export default App
