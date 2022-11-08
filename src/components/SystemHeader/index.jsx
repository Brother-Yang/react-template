import React from 'react'

import { useNavigate } from 'react-router-dom'

import routes from '@/router'

import styles from './index.less'

const SystemHeader = () => {
  const navigate = useNavigate()

  const headerMenus = routes?.[0]?.children?.filter((item) => item?.id)

  return (
    <div className={styles.SystemHeader}>
      <p className={styles.Title}>后台管理系统</p>
      <ul>
        {headerMenus?.map((item) => (
          <li key={item?.id} onClick={() => navigate(item?.path)}>
            {item?.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SystemHeader
