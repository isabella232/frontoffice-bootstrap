import React from 'react';
import { NavLink } from 'react-router-dom';

import structure from '~constants/structure';

import styles from './styles.module.scss';

function Sidebar() {
  return (
    <div className={styles.sidebarContainer}>
      {structure.map(model => (
        <NavLink
          key={model.name}
          to={`/${model.endpoint}`}
          className={styles.modelLink}
          activeClassName={styles.activeModel}
        >
          {model.name.charAt(0).toUpperCase() + model.name.slice(1)}
        </NavLink>
      ))}
    </div>
  );
}

export default Sidebar;
