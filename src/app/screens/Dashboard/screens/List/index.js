import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { t } from 'i18next';

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
      <>
        <div className="row space-between middle form-header">
          <h1 className="title2">{t('List:componentList', { component: this.state.data.name })}</h1>
          <Link to={`${this.props.match.path}/new`} className={`${styles.link} button-primary`}>
            {t('List:create')}
          </Link>
        </div>
      </>
    );
  }
}

export default List;
