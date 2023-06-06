import Dict from '../index';

export default {
  initStatic() {
    Dict.handlers.SystemHelloReact = () => {
      console.log('SystemHelloReact', '我晕行了我晕行了');
      return 'hello react';
    };
    Dict.handlers.SystemHelloPromise = () => Promise.resolve('hello Promise');
  },
  initRemote() {
    Dict.handlers.SystemRequestApiTest = () => {
      console.log('SystemRequestApiTest晕行了');
      return Promise.resolve([{ name: '大强', sex: '女' }]);
    };

    Dict.handlers.SystemRequestApiTest2 = () => (arr: unknown[]) => {
      console.log('SystemRequestApiTest2晕行了');
      return Promise.resolve(arr);
    };
  },
};
