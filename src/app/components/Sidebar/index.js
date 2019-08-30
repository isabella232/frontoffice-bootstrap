import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import structure from '~constants/structure';

import styles from './styles.module.scss';

function Sidebar() {
  return (
    <div className={styles.sidebarContainer}>
      {structure.map(model => (
        <Link key={model.name} to={model.endpoint} className={styles.modelLink}>
          {model.name}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
