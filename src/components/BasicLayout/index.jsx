import React from 'react'
import ReactDom from 'react-dom'

import { Menu } from 'antd'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import routes from '@/router'

import styles from './index.less'

const flatArr = {}

// 根据id找路径
const findRoutePathById = (id) => {
  if (!Object.keys(flatArr).length) forEachRoutes(routes)
  return flatArr[id]
}

/**
 * 扁平化路由配置 整合id和path
 */
const forEachRoutes = (routes, prefix = '') => {
  routes.forEach((route) => {
    // 拼接path
    let completePath = `${prefix}${route.path}`
    if (route.id && route.path) {
      if (completePath[0] !== '/') {
        completePath = '/' + completePath
      }
      flatArr[route.id] = completePath.replace('//', '/')
    }
    if (route.children) forEachRoutes(route.children, completePath + '/')
  })
}

// 遍历子菜单
const getChildMenus = (menu) => {
  return menu?.map((item) => {
    if (item?.children) {
      return {
        label: item?.name,
        key: item?.id,
        children: getChildMenus(item?.children),
      }
    } else {
      return {
        label: item?.name,
        key: item?.id,
      }
    }
  })
}

const BasicLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // 菜单
  const getSideMenuItems = () => {
    const sideMenus = routes?.[0]?.children?.filter((item) => item?.id && item?.children)
    const pathName = location?.pathname?.split('/')?.[1]
    const items = sideMenus
      ?.find((item) => item?.path === pathName)
      ?.children?.filter((item) => item?.id)
    return getChildMenus(items)
  }

  // 侧边栏
  const renderSideMenus = () => {
    return (
      document.getElementById('SideMenu') &&
      ReactDom.createPortal(
        <div className={styles.SideMenu}>
          <Menu
            items={getSideMenuItems()}
            mode="inline"
            onClick={({ key }) => {
              navigate(findRoutePathById(key))
            }}
          />
        </div>,
        document.getElementById('SideMenu')
      )
    )
  }
  return (
    <div>
      {renderSideMenus()}
      <h1>BasicLayout</h1>
      <Outlet />
    </div>
  )
}

export default BasicLayout
