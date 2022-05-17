import axios from 'axios'

const request = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts/1',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' },
})

/**
 *
 * @param {url} url
 * @returns
 */
const get = ({ url = '', params = {}, ...options } = {}) => {
  return new Promise((resolve) => {
    request({
      method: 'get',
      params,
      url,
      ...options,
    }).then((res) => {
      if (res.status === 200) {
        resolve(res.data)
      }
    })
  })
}
export { get }
