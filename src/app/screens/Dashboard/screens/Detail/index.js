import React, { Component } from 'react';
import { t } from 'i18next';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
          <div>
            <button
              type="button"
              className="m-right-1 button-secondary m-bottom-1"
              onClick={this.handleDelete}
            >
              {t('Detail:delete')}
            </button>
            <Link to={`${this.props.match.url}/edit`} className="m-right-1 button-primary m-bottom-1">
              {t('Detail:edit')}
            </Link>
          </div>
        </div>
        {this.state.data.attributes?.map(attribute => (
          <div className="row" key={attribute.name}>
            <span className="bold m-right-1">{attribute.name}:</span>
            <span>{this.props.resource[attribute.name]}</span>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  resource: store.resource.resource
});

export default connect(mapStateToProps)(Detail);
