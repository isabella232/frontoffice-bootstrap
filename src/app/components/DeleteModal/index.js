import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { actionCreators as modalActions } from '~redux/modal/actions';

import { actionCreators as resourceActions } from '~redux/resource/actions';

import styles from './styles.module.scss';

class DeleteModal extends Component {
  handleClose = () => {
    const attributes = window.location.pathname.split('/').slice(1);
    this.props.deleteResource({ resource: attributes[0], id: attributes[1] });
    this.props.toggleDeletemodal();
  };

  render() {
    const { open, toggleDeletemodal } = this.props;
    return (
      <Modal
        open={open}
        onClose={toggleDeletemodal}
        center
        classNames={{ modal: styles.modalWrapper, closeIcon: 'modal-close' }}
      >
        <div className={`${styles.modalContent} column center`}>
          <h2 className="subtitle m-bottom-6">¿Estás seguro que quieres borrar este elemento?</h2>
          <div className="row center">
            <button type="button" onClick={this.handleClose} className="button-primary m-right-2">
              Confirmar
            </button>
            <button type="button" onClick={toggleDeletemodal} className="button-secondary">
              cancel
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleDeletemodal: () => dispatch(modalActions.toggleDeleteModal()),
  deleteResource: params => dispatch(resourceActions.deleteResource(params))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(DeleteModal)
);
