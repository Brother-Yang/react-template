import Dict from './index';

export default () => {
  const modulesFiles = require.context('./Dict', true, /.([j|t])s$/);
  const dictArr: { initRemote: () => {}; initStatic: () => {} }[] = [];

  modulesFiles.keys().forEach((path) => {
    const dict = modulesFiles(path).default;
    dictArr.push(dict);
  });

  Dict.init(dictArr);
};
