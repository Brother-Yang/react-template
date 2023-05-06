import lodash from 'lodash'

const handlers = {}

const value = {}

const Dict = {
  handlers: new Proxy(handlers, {
    set() {
      return Reflect.set(...arguments)
    },
  }),

  // 代理同一个值没法缓存
  value: new Proxy(value, {
    get(target, property, receiver) {
      // 缓存
      if (!(property in target)) {
        receiver[property] = {
          value: getValue(property),
          refresh: () => {},
        }
      }

      return Reflect.get(target, property, receiver)
    },
  }),
  init: (dictArr) => {
    dictArr?.forEach((item) => {
      item?.initRemote?.()
      item?.initStatic?.()
    })
  },
}

// 判断是函数还是基础值
function getValue(property) {
  const results = handlers[property]()
  if (typeof results === 'function') {
    return memorize(results)
  } else {
    return results
  }
}

// 缓存函数
const memorize = function (fn) {
  const cache = new Map() // 存储缓存数据的对象
  return function () {
    for (const key of cache.keys()) {
      // 利用深比较判断是否有这个值
      if (lodash.isEqual(key, arguments)) {
        // 如果已经缓存过，直接取值。否则重新计算并且缓存
        return cache.get(key)
      }
    }
    // 清空之前缓存
    cache.clear()
    cache.set(arguments, fn(...arguments))
    return cache.get(arguments)
  }
}

console.log(Dict, 'Dict')

export default Dict
