import { useRequest } from 'ahooks'
import { request } from './request'

// !!!待优化
// 结合ahooks， 自动管理data，loading，error等
const useRequestHook = (options = {}) => {
  const response = useRequest(request, {
    // 默认不执行
    manual: true,
    // 防止闪烁
    loadingDelay: 300,
    // 防抖
    debounceWait: 500,
    ...options,
  })

  return response
}

export { useRequestHook }
