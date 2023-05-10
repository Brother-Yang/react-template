import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { request } from '@/util/request'

// 异步
export const getUserInfo = createAsyncThunk(
  'str/getUserInfo',
  async ({ id }: { id: number }, thunkAPI) => {
    console.log(thunkAPI, 'thunkAPI')
    return await request({ url: `posts/${id}` })
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
