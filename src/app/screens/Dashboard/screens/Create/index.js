import React from 'react';

import logo from './assets/logo.svg';
import styles from './styles.module.scss';

import structure from '~constants/structure';

function Create(props) {
  const data = structure.find(model => props.match.path.split('/')[1] === model.endpoint);
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p className={styles.text}>{data.name} creation</p>
        <a className={styles.appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Create;
