import React, { Component } from 'react';

import logo from './assets/logo.svg';
import styles from './styles.module.scss';

import structure from '~constants/structure';

import Paginator from '~components/Paginator';

import Table from '~components/Table';

class List extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    this.setState({
      data: structure.find(model => this.props.match.path.slice(1) === model.endpoint)
    });
  }

  // TODO: use endpoint to get data and format headers before sending to Table component

  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <p className={styles.text}>{this.state.data.name} list</p>
          <a className={styles.appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default List;
