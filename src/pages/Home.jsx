import React from 'react';

import './index.css';

import styles from './index.less';

const Home = () => {
  return (
    <div>
      我是home页
      <input type="text" />
      <span>hello world</span>
      <h1 className={styles.test}>hello world</h1>
    </div>
  );
};

export default Home;
