import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

import { actionCreators as modalActions } from '~redux/modal/actions';

import { actionCreators as resourceActions } from '~redux/resource/actions';

import Routes from '~constants/routes';

class DeleteModal extends Component {
  handleClose = () => {
    const attributes = window.location.pathname.split('/').slice(1);
    this.props.deleteResource({ resource: attributes[0], id: attributes[1] });
    this.props.callBack();
  };

  render() {
    const { open, toggleDeletemodal } = this.props;
    return (
      <Modal open={open} onClose={toggleDeletemodal} center>
        <div className="m-top-3 column">
          <h2 className="subtitle m-bottom-2">¿Estás seguro que quieres borrar este elemento?</h2>
          <button type="button" onClick={this.handleClose} className="button-primary">
            Confirmar
          </button>
        </div>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleDeletemodal: () => dispatch(modalActions.toggleDeleteModal()),
  callBack: () => {
    dispatch(push(Routes.HOME));
    dispatch(modalActions.toggleDeleteModal());
  },
  deleteResource: params => dispatch(resourceActions.deleteResource(params))
});

export default connect(
  null,
  mapDispatchToProps
)(DeleteModal);
