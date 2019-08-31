import React, { Component } from 'react';
import { t } from 'i18next';
import { connect } from 'react-redux';

import structure from '~constants/structure';

import leftArrow from '~assets/left-arrow.svg';

import { actionCreators as modalActions } from '~redux/modal/actions';

import { actionCreators as resourceActions } from '~redux/resource/actions';

import styles from './styles.module.scss';

class Detail extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    const resourceName = this.props.match.path.split('/')[1];
    this.props.dispatch(
      resourceActions.getResource({ resource: resourceName, id: this.props.match.params.id })
    );
    this.setState({
      data: structure.find(model => resourceName === model.endpoint)
    });
  }

  handleCancel = () => {
    this.props.dispatch(modalActions.toggleCancelModal());
  };

  handleDelete = () => {
    this.props.dispatch(modalActions.toggleDeleteModal());
  };

  render() {
    return (
      <div className={styles.container}>
        <div className="row full-width space-between middle">
          <div className="row">
            <button onClick={this.handleCancel} type="button">
              <img src={leftArrow} height="20px" />
            </button>
            <h1 className="title m-bottom-1 m-left-1 capitalize">
              {t('Detail:resourceDetail', { resource: this.state.data.name })}
            </h1>
          </div>
          <button type="button" className="m-right-1 button-secondary m-bottom-1" onClick={this.handleDelete}>
            {t('Create:delete')}
          </button>
        </div>
        {this.state.data.attributes?.map(attribute => (
          <div className="row" key={attribute.name}>
            <span>{attribute.name}:</span>
            <span>{}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default connect()(Detail);
