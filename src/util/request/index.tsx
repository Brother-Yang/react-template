import axios, { AxiosRequestConfig } from 'axios'
import { notification } from 'antd'

const baseRequest = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' },
})

function errorStatus() {
  return {
    401: '未授权，请登录',
    404: '找不到请求资源',
    500: '系统异常',
  }
}

// 添加请求拦截器
baseRequest.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    console.log(error, 'error request')
    return Promise.reject(error)
  }
)

// 添加响应拦截器
baseRequest.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    // console.log(response, 'response')
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么

    notification['error']({
      message: error.response.status,
      description: errorStatus()[error.response.status as keyof typeof errorStatus],
    })

    return Promise.reject(error)
  }
)

/**
 *
 * @param {options} options
 * @returns
 */
const request = <T,>(options: AxiosRequestConfig): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    baseRequest(options)
      .then((res) => {
        if (res.status >= 200 && res.status <= 304) {
          resolve(res.data)
        }
      })
      .catch((err) => {
        console.log(err, 'err')
        reject(err.message)
      })
  })
}

export { request }
