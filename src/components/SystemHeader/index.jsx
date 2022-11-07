import React from 'react'

import { useNavigate } from 'react-router-dom'

import { sideMenus } from '@/router/api'

import styles from './index.less'

const SystemHeader = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.SystemHeader}>
      <p className={styles.Title}>后台管理系统</p>
      <ul>
        {sideMenus?.map((item) => (
          <li key={item?.id} onClick={() => navigate(item?.path)}>
            {item?.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SystemHeader
