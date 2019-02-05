import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import store from '../store';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <div>Fast food fast</div>
      </Provider>
    );
  }
}

App.propTypes = {};

export default App;
