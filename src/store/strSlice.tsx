import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { request } from '@/utils/request'

// 异步
export const getUserInfo = createAsyncThunk('str/getUserInfo', async ({}, thunkAPI) => {
  console.log(thunkAPI, 'thunkAPI')
  const res = request({ url: 'users' })
  return res
})

export const fetchAddUser = createAsyncThunk('str/fetchAddUser', async (data: any) => {
  const res = request({ url: 'users', method: 'POST', data })

  return res
})

const initialState: {
  users: { id: number; name: string; password: string }[]
} = {
  users: [],
}

const strSlice = createSlice({
  name: 'str',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.fulfilled, (state, action: PayloadAction<any>) => {
      state.users = action.payload
    })

    builder.addCase(fetchAddUser.fulfilled, (state, action) => {
      // state.users = action.payload
      console.log(action.payload, 'post')
    })
  },
  // extraReducers: {
  //   [getUserInfo.fulfilled]: (state, action) => {
  //     console.log(state, 'state')
  //     console.log(action, 'action')
  //     state.value = action.payload.id
  //   },
  // },
})

export default strSlice.reducer
