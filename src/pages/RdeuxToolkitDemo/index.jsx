import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/store/counterSlice'
import { getUserInfo } from '@/store/strSlice'

import styles from './index.less'

import { Button } from 'antd'

const RdeuxToolkitDemo = () => {
  const dispatch = useDispatch()

  const count = useSelector((state) => state.counter.value)
  const str = useSelector((state) => state.strState.str)

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
