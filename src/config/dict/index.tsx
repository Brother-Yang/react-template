import lodash from 'lodash';

type BaseObj = { [k: string | symbol]: any };

const handlers: BaseObj = {};

const value: BaseObj = {};

const Dict = {
  handlers: new Proxy(handlers, {
    set(...args) {
      return Reflect.set(...args);
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
        };
      }

      return Reflect.get(target, property, receiver);
    },
  }),
  init: (dictArr: { initRemote: () => {}; initStatic: () => {} }[]) => {
    dictArr.forEach((item) => {
      item.initRemote();
      item.initStatic();
    });
  },
};

// 判断是函数还是基础值
function getValue(property: string | symbol) {
  const results = handlers[property]();
  if (typeof results === 'function') {
    return memorize(results);
  } else {
    return results;
  }
}

// 缓存函数
const memorize = function (fn: (...args: unknown[]) => {}) {
  const cache = new Map(); // 存储缓存数据的对象
  return function (...args: unknown[]) {
    for (const key of cache.keys()) {
      // 利用深比较判断是否有这个值
      if (lodash.isEqual(key, args)) {
        // 如果已经缓存过，直接取值。否则重新计算并且缓存
        return cache.get(key);
      }
    }
    // 清空之前缓存
    cache.clear();
    cache.set(args, fn(...args));
    return cache.get(args);
  };
};

console.log(Dict, 'Dict');

export default Dict;
