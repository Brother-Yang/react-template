import React, { useEffect } from 'react'

import { Button } from 'antd'

import Dict from '@/config/dict'

import styles from './index.less'

const DictDemo = () => {
  async function fetchRequestApiTest() {
    console.log(await Dict.value.SystemRequestApiTest.value, 'SystemRequestApiTest')
    console.log(await Dict.value.SystemHelloWorld.value, 'SystemHelloWorld')
    console.log(
      await Dict.value.SystemRequestApiTest2.value([{ name: '二牛', sex: '男' }]),
      ' SystemRequestApiTest2'
    )
  }

  useEffect(() => {
    fetchRequestApiTest()
  }, [])

  return (
    <div className={styles.Box}>
      hello world
      <Button
        onClick={async () => {
          fetchRequestApiTest()
        }}
      >
        点一下
      </Button>
      <Button
        onClick={async () => {
          console.log(await Dict.value.SystemHelloReact.value, 'SystemHelloReact')
          console.log(
            await Dict.value.SystemRequestApiTest2.value([{ name: '二妞', sex: '女' }]),
            ' SystemRequestApiTest2'
          )
        }}
      >
        再点
      </Button>
    </div>
  )
}

export default DictDemo
