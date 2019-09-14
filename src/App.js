import React, { Component } from 'react'
import { Provider } from "react-redux";
import store from './store/index';
import Count from './components/Count';
import Control from './components/Control';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <h2>Redux-React-Practice</h2>
        <Count/>
        <Control/>
      </div>
      </Provider>
    )
  }
}

export default App