import { useRequest } from 'ahooks'
import { request } from './request'

// 结合ahooks， 自动管理data，loading，error等
const useRequestHook = (options = {}) => {
  const response = useRequest(request, {
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
