import axios from 'axios'

const baseRequest = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts/1',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' },
})

/**
 *
 * @param {url} url
 * @returns
 */
const request = ({
  url = '',
  params = {},
  method = 'get',
  ...options
} = {}) => {
  return new Promise((resolve, reject) => {
    baseRequest({
      method,
      params,
      url,
      ...options,
    })
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data)
        }
      })
      .catch((err) => reject(err.message))
  })
}
export { request }
