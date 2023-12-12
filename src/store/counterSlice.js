import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 10,
    form: 'update'
  },
  reducers: {
    increment: (state, action) => { // case "countIncrement"
      state.count += 1
    },
    decrement: (state, action) => { // case "countIncrement"
      console.log(action)
      state.count -= action.payload
    }
  }
})

// Actions
// akan dipanggil dikomponnet
export const { increment, decrement } = counterSlice.actions

// Reducer functions
// akan dipanggil di store/index.js
export default counterSlice.reducer // countIncrement | countDecrement
