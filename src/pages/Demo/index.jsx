import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/store/counterSlice'
import styles from './index.less'

import { Button } from 'antd'

const Demo = () => {
  const count = useSelector((state) => {
    console.log(state, 'state')
    return state.counter.value
  })
  const dispatch = useDispatch()

  console.log(increment(), 'increment')

  return (
    <div>
      <Button
        onClick={() => {
          dispatch((a, v, c) => {
            console.log(a, 'a')
            console.log(v, 'b')
            console.log(c, 'c')
            return a(increment())
          })
        }}
      >
        点击
      </Button>
      {/* <button aria-label="Increment value" onClick={() => dispatch(increment())}>
        Increment
      </button> */}
      <span className={styles.textNum}>{count}</span>
      {/* <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement
      </button> */}
    </div>
  )
}
export default Demo
