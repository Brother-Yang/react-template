import Dict from './index'

// import dictSystemConfig from './Dict/dict.system.config'

export default () => {
  const modulesFiles = require.context('./Dict', true, /.([j|t])s$/)
  const dictArr = []

  modulesFiles.keys().forEach((path) => {
    const dict = modulesFiles(path).default
    dictArr.push(dict)
  })

  Dict.init(dictArr)
}
