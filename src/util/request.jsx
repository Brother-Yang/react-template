import axios from 'axios'

const baseRequest = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' },
})

/**
 *
 * @param {options} options
 * @returns
 */
const request = (options = {}) => {
  return new Promise((resolve, reject) => {
    baseRequest(options)
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data)
        }
      })
      .catch((err) => reject(err.message))
  })
}

export { request }
