import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { actionCreators as modalActions } from '~redux/modal/actions';

import styles from './styles.module.scss';

class ConfirmModal extends Component {
  handleConfirm = () => {
    this.props.toggleCancelModal();
    this.props.history.goBack();
  };

  render() {
    const { open, toggleCancelModal } = this.props;
    return (
      <Modal
        open={open}
        onClose={toggleCancelModal}
        center
        classNames={{ modal: styles.modalWrapper, closeIcon: 'modal-close' }}
      >
        <div className={`${styles.modalContent} column center`}>
          <h2 className="subtitle m-bottom-6">¿Estás seguro que querés cancelar esta acción?</h2>
          <div className="row center">
            <button type="button" onClick={this.handleConfirm} className="button-primary m-right-2">
              Confirmar
            </button>
            <button type="button" onClick={toggleCancelModal} className="button-secondary">
              cancel
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleCancelModal: () => dispatch(modalActions.toggleCancelModal())
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ConfirmModal)
);
