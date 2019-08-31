import React, { Component } from 'react';
import { connect } from 'react-redux';

import structure from '~constants/structure';

import { actionCreators as modalActions } from '~redux/modal/actions';

import { actionCreators as resourceActions } from '~redux/resource/actions';

import CreationContainer from './layout';

class Create extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    this.setState({
      data: structure.find(model => this.props.match.path.split('/')[1] === model.endpoint)
    });
  }

  handleSubmit = body => {
    this.props.dispatch(resourceActions.createResource({ resource: this.state.data.name, body }));
  };

  onCancel = () => {
    this.props.dispatch(modalActions.toggleCancelModal());
  };

  onDelete = () => {
    this.props.dispatch(modalActions.toggleDeleteModal());
  };

  render() {
    return (
      <CreationContainer
        modelData={this.state.data}
        onSubmit={this.handleSubmit}
        handleCancel={this.onCancel}
        handleDelete={this.onDelete}
      />
    );
  }
}
export default connect()(Create);
