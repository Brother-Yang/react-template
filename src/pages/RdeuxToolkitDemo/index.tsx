import React from 'react'

import { Button } from 'antd'

import { decrement, increment } from '@/store/counterSlice'
import { getUserInfo } from '@/store/strSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

import styles from './index.less'

const RdeuxToolkitDemo = () => {
  const dispatch = useAppDispatch()

  const count = useAppSelector((state) => state.counter.value)
  const str = useAppSelector((state) => state.strState.str)

  const getUserTitle = () => {
    dispatch(getUserInfo({ id: 8 }))
  }

  return (
    <div style={{ padding: 10 }}>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <span className={styles.textNum}>{count}</span>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      <hr />

      <div>
        <Button onClick={getUserTitle} type="primary">
          点击
        </Button>

        <h1>{str}</h1>
      </div>
    </div>
  )
}
export default RdeuxToolkitDemo
