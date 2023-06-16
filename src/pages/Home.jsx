import React from 'react';

import './index.css';

import styles from './index.less';

const Home = () => {
  console.log(a);
  return (
    <div>
      我是home页
      <input type="text" />
      <span>hello world</span>
      <div className={styles.box}>hello world</div>
    </div>
  );
};

export default Home;
