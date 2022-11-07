import routes from './index'

// 菜单
export const sideMenus = routes?.[0]?.children?.filter((item) => item?.id)
