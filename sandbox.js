import { createStore } from 'redux'


const intialState = {
  count: 0,
  form: 'product'
}

// { getState, dispatch, subscribe }
const store = createStore(function reducer(state = intialState, action) {
  console.log(state, "<<< init")
  switch (action.type) {
    case "countIncrement":
      return {
        ...state,
        count: state.count + 1
      }
  }

  return state
})

// (0) state = undefined, { type: '@@redux/INITn.g.s.k.6.h' }
// (1) state = {count: 0}, { type: 'countIncrement' }
store.subscribe((params) => {
  console.log(store.getState())
})

//
// { type: "countIncrement" }
store.dispatch() // -> action akan dikirim ke store -> reducer

store.dispatch({
  type: "countIncrement"
}) // -> action akan dikirim ke store -> reducer
