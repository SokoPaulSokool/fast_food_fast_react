import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import store from '../store';
import Routes from '../RouterComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RouterComponent from '../RouterComponent';
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <RouterComponent />
        mamma
      </Provider>
    );
  }
}

App.propTypes = {};

export default App;
