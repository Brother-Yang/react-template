import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import alovaInstance from '@/util/request/index'

// 异步
export const getUserInfo = createAsyncThunk(
  'str/getUserInfo',
  async ({ id }: { id: number }, thunkAPI) => {
    console.log(thunkAPI, 'thunkAPI')
    const res = alovaInstance
      .Get<{ id: number; body: string; title: string; userId: number }>(`posts1/${id}`)
      .send()
    return res
  }
)

const initialState = {
  str: 'hello world',
}

const strSlice = createSlice({
  name: 'str',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.str = action.payload.title
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
