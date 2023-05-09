import Dict from '../index'

export default {
  initStatic() {
    Dict.handlers.SystemHelloWorld = () => {
      console.log('SystemHelloWorld', '我晕行了')
      return 'hello world'
    }
  },
  initRemote() {},
}
