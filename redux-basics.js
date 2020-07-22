const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
}

// Reducer
const reducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1
    }
  }

  if (action.type === 'ADD_COUNTER') {
    const { value } = action

    return {
      ...state,
      counter: state.counter + value
    }
  }
  return state; // <- return old state
}

// Store
const store = createStore(reducer);
console.log(store.getState())

// Subscription
store.subscribe(() => {
  console.log('[Subscription]', store.getState())
})

// Action
store.dispatch({type: 'INC_COUNTER'})
store.dispatch({type: 'ADD_COUNTER', value: 4})

console.log(store.getState())
