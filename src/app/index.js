import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { apiSetup } from '../config/api';
import store from '../redux/store';

import Routes from './components/Routes';

class App extends Component {
  componentDidMount() {
    apiSetup(store.dispatch);
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
        <ToastContainer />
      </Provider>
    );
  }
}

App.defaultProps = {
  loading: false
};

export default App;
