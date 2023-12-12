import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import menuSlice from './menuSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    menu: menuSlice
  },
})

/*
{
  counter: { // counterSlice state
    count: 0
  },
  product: { // productSlice state

  }
}

*/
