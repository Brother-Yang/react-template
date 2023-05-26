import React from 'react'

import { Button } from 'antd'

import { decrement, increment } from '@/store/counterSlice'
import { getUserInfo, fetchAddUser } from '@/store/strSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

import styles from './index.less'

const RdeuxToolkitDemo = () => {
  const dispatch = useAppDispatch()

  const count = useAppSelector((state) => state.counter.value)
  const users = useAppSelector((state) => state.strState.users)

  const getUserList = () => {
    dispatch(getUserInfo())
  }

  const addUser = () => {
    dispatch(fetchAddUser({ name: 'Green', password: 123, role: '1' }))
  }

  return (
    <div style={{ padding: 10 }}>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <span className={styles.textNum}>{count}</span>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      <hr />

      <div>
        <Button onClick={getUserList} type="primary">
          查询
        </Button>

        <Button onClick={addUser} type="primary">
          新增
        </Button>

        <h1>{users.map((item) => item.name)}</h1>
      </div>
    </div>
  )
}
export default RdeuxToolkitDemo
