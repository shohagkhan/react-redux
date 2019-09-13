import React, { Component } from 'react'
import { createStore } from "redux";

export default class App extends Component {
  render() {

    const reducer = (state = {}, action) => {
      if (action.type === 'A') {
        return { A: 'I am A' }
      }
      if (action.type==='B') {
        return {
          ...state,
          B: 'I am B'
        }
      }
      return state
    }

    const store = createStore(reducer)

    store.subscribe(() => {
      console.log(store.getState().A)
    })
    store.subscribe(() => {
      console.log(store.getState().B)
    })

    
    store.dispatch({ type: 'A' })
    store.dispatch({ type: 'B' })


    return (
      <div>

      </div>
    )
  }
}

// 1. reducer 
// 2. store 
// 3. subscribe 
// 4. Dispatch