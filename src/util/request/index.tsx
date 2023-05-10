import { createAlova } from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import ReactHook from 'alova/react'

import { notification } from 'antd'

function showErrorMessage(status: number) {
  let message = ''
  switch (status) {
    case 401:
      message = '未授权，请登录'
      break
    case 404:
      message = '找不到请求资源'
      break
    case 500:
      message = '系统异常'
      break

    default:
      message = `出错啦${status}`
      break
  }

  return message
}

// 官网例子
const alovaInstance = createAlova({
  baseURL: 'https://jsonplaceholder.typicode.com',
  statesHook: ReactHook,
  requestAdapter: GlobalFetch(),
  timeout: 5000,
  beforeRequest(method) {
    // 假设我们需要添加token到请求头
    method.config.headers.Authorization = 'token'
  },

  // 使用数组的两个项，分别指定请求成功的拦截器和请求失败的拦截器
  responded: {
    // 请求成功的拦截器
    // 当使用GlobalFetch请求适配器时，第一个参数接收Response对象
    // 第二个参数为当前请求的method实例，你可以用它同步请求前后的配置信息
    onSuccess: async (response, method) => {
      if (response.status >= 400) {
        notification['error']({
          message: response.status,
          description: showErrorMessage(response.status),
        })

        throw new Error(response.statusText)
      }
      const json = await response.json()

      // if (json.code !== 200) {
      //   // 抛出错误或返回reject状态的Promise实例时，此请求将抛出错误
      //   throw new Error(json.message)
      // }

      // 解析的响应数据将传给method实例的transformData钩子函数，这些函数将在后续讲解
      return json
    },

    // 请求失败的拦截器
    // 请求错误时将会进入该拦截器。
    // 第二个参数为当前请求的method实例，你可以用它同步请求前后的配置信息
    onError: (err, method) => {
      console.log(err)
    },
  },
})

export default alovaInstance
