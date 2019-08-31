import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionCreators as modalActions } from '~redux/modal/actions';

import { actionCreators as resourceActions } from '~redux/resource/actions';

import structure from '~constants/structure';

import EditContainer from './layout';

class Edit extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    this.setState({
      data: structure.find(model => this.props.match.path.slice(1).split('/')[0] === model.endpoint)
    });
  }

  handleSubmit = body => {
    this.props.dispatch(
      resourceActions.editResource({
        resource: this.state.data.name,
        body: { ...body, id: this.props.match.url.slice(1).split('/')[1] }
      })
    );
  };

  onCancel = () => {
    this.props.dispatch(modalActions.toggleCancelModal());
  };

  onDelete = () => {
    this.props.dispatch(modalActions.toggleDeleteModal());
  };

  render() {
    return (
      <EditContainer
        modelData={this.state.data}
        onSubmit={this.handleSubmit}
        initialValues={this.props.resource}
        handleCancel={this.onCancel}
        handleDelete={this.onDelete}
      />
    );
  }
}

const mapStateToProps = store => ({
  resource: store.resource.resource
});

export default connect(mapStateToProps)(Edit);
