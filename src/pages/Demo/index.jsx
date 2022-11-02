import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/store/counterSlice'
import styles from './index.less'

const Demo = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <button aria-label="Increment value" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span className={styles.textNum}>{count}</span>
      <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  )
}
export default Demo
