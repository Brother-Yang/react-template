import React from 'react'

import { Outlet } from 'react-router-dom'

import styles from './index.less'

const App = () => {
  return (
    <div className={styles.App}>
      <h2>App</h2>
      <Outlet />
    </div>
  )
}
export default App
